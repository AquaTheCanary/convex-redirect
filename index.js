<script>
const user = window.location.pathname.substring(1);

const tenantId = "cd935dfc-f852-41cf-bc5b-1cb17c3a8c85";
const clientId = "bda7d342-44d8-40ec-9016-a23e78bc8db9";

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
