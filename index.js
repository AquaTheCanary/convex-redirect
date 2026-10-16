<script>
const user = window.location.pathname.substring(1);

const tenantId = "YOUR_TENANT_ID";
const clientId = "YOUR_APP_ID";

const loginHint = `${user}@convex.abrdns.com`;

const url =
`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize` +
`?client_id=${clientId}` +
`&response_type=code` +
`&redirect_uri=${encodeURIComponent("https://your-app.com/auth")}` +
`&scope=openid profile email` +
`&login_hint=${encodeURIComponent(loginHint)}`;

window.location.replace(url);
</script>
