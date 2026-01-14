import { useState } from "react";


export default function Signup() {
const [form, setForm] = useState({ username: "", email: "", password: "" });


const submit = e => {
e.preventDefault();
alert("Signup successful (mock)");
};


return (
<div className="auth">
<form className="auth-box" onSubmit={submit}>
<h2>Sign Up</h2>
<input placeholder="Username" onChange={e=>setForm({...form, username:e.target.value})} />
<input placeholder="Email" onChange={e=>setForm({...form, email:e.target.value})} />
<input type="password" placeholder="Password" onChange={e=>setForm({...form, password:e.target.value})} />
<button>Create Account</button>
</form>
</div>
);
}