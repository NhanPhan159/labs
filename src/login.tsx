import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"

const Login = () => {
    return (
        <div className="p-10 bg-red-300">
            <div className="rounded-xl bg-white p-2 flex">
                <div className="rounded-xl grow">
                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Ftravel%2Fdestinations%2Fnice-in-pictures%2Fphotostory%2F44945486.cms&psig=AOvVaw3N2K837BQk5lAztiZVrf9P&ust=1747093145286000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCND7kqTLnI0DFQAAAAAdAAAAABAE" alt="" />
                </div>
                <div className="p-10">
                    <h1>Login Page</h1>
                    <form action="">
                        <div className="my-2">
                            <label htmlFor="">Username</label>
                            <Input placeholder="username"/>
                        </div>
                        <div className="my-2"> 
                            <label htmlFor="">password</label>
                            <Input placeholder="password"/>
                        </div>
                        <Button title="login"/>
                    </form>

                    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftimesofindia.indiatimes.com%2Ftravel%2Fdestinations%2Fnice-in-pictures%2Fphotostory%2F44945486.cms&psig=AOvVaw3N2K837BQk5lAztiZVrf9P&ust=1747093145286000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCND7kqTLnI0DFQAAAAAdAAAAABAE" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Login