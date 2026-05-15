import os

from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserCreationForm


class PanelRegistrationForm(UserCreationForm):
    email = forms.EmailField(
        required=False,
        widget=forms.EmailInput(attrs={"autocomplete": "email"}),
    )
    invite_key = forms.CharField(
        required=False,
        widget=forms.PasswordInput(attrs={"autocomplete": "off"}),
    )

    class Meta:
        model = get_user_model()
        fields = ("username", "email", "password1", "password2")

    def __init__(self, *args, **kwargs):
        self.require_invite = kwargs.pop("require_invite", False)
        super().__init__(*args, **kwargs)
        if not self.require_invite:
            self.fields.pop("invite_key", None)

    def clean_invite_key(self):
        if not self.require_invite:
            return ""
        key = (self.cleaned_data.get("invite_key") or "").strip()
        expected = os.getenv("PANEL_REGISTRATION_KEY", "").strip()
        if key != expected:
            raise forms.ValidationError("invite_invalid")
        return key

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data.get("email", "")
        user.is_staff = True
        user.is_superuser = True
        if commit:
            user.save()
        return user
