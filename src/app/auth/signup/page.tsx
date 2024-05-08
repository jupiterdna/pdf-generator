import { signup } from "@/app/actions/auth";
import { getErrorMessage } from "@/app/lib/session";

const hasError = async () => {
  const err:any = await getErrorMessage();
  return err ? err.split(",") : []
};

export default async function Page() {
  const error: any = await hasError();

  return (
    <div>
      <form action={signup}>
        <div className="p-4">
          <h3 className="mb-4">Sign Up </h3>
          <div className="mb-4">
            <div>Name:</div>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="border border-gray-200 p-1"
            />
          </div>
          <div className="mb-4">
            <div>Username:</div>
            <input
              type="text"
              name="username"
              placeholder="your username"
              className="border border-gray-200 p-1"
            />
          </div>
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

      {error?.length && <div className="p-4 text-red-500">{error[1]} {error[0]} is invalid or already used!</div>}
    </div>
  );
}
