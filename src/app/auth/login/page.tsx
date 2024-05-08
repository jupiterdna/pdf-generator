import { login } from "@/app/actions/auth";

export default async function Page() { 

    return(
        <div className="p-4">
      <form action={login}>
        <div className="p-4">
          <h3 className="mb-4">Login </h3>
          <div className="mb-4">
            <div>email address:</div>
            <input
              type="email"
              name="email"
              placeholder="your email address"
              className="border border-gray-200 p-1"
            />
          </div>
          <div className="mb-4">
            <div>Password</div>
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="border border-gray-200 p-1"
            />
          </div>
          <div>
            <button className="border p-1 border border-gray-200 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    )
}