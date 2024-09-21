import { Button, Checkbox, Input } from "@material-tailwind/react";

const Login = ({ isOpen, onClose, openRegister }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>

        <form className="space-y-4">
          <div className="text-center">
            <img src="/assets/Logo-Localine.png" alt="Logo Localine" className="mx-auto w-24 h-18" />
            <h1 className="text-2xl font-bold mt-2">Localine</h1>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <Input type="email" placeholder="email" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <Input type="password" placeholder="password" className="input input-bordered w-full" />
          </div>
          <div className="flex justify-between items-center">
            <Checkbox label="Remember me" />
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
          <Button type="submit" fullWidth variant="gradient">
            Login
          </Button>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-blue-600 hover:underline" onClick={(e) => {
              e.preventDefault();
              onClose();
              openRegister();
            }}>
              Belum Punya Akun? Daftar Sekarang!
            </a>
          </div>
        </form>
      </div>
    </div>

  );
}

export default Login;
