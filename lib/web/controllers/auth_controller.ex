defmodule Accent.AuthController do
  use Phoenix.Controller

  alias Accent.UserRemote.Authenticator

  plug Ueberauth

  def callback(conn = %{assigns: %{ueberauth_auth: auth}}, _) do
    case Authenticator.authenticate(auth) do
      {:ok, token} ->
        redirect(conn, external: webapp_url() <> "?token=" <> token.token)

      _ ->
        redirect(conn, external: webapp_url())
    end
  end

  def callback(conn, _) do
    redirect(conn, external: webapp_url())
  end

  defp webapp_url do
    Application.get_env(:accent, :webapp_url)
  end
end
