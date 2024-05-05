type CreateUserFormProps = {
  createUserAction: (formData: FormData) => Promise<void>;
};

function CreateUserForm({ createUserAction }: CreateUserFormProps) {
  return (
    <form action={createUserAction} className="min-w-[450px] mx-auto">
      <div className="flex flex-col mb-4">
        <label className="font-semibold mb-2" htmlFor="username">
          Username
        </label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div className="flex flex-col mb-4">
        <label className="font-semibold mb-2" htmlFor="age">
          Age
        </label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          name="age"
          id="age"
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="font-semibold mb-2" htmlFor="address">
          Address
        </label>
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          name="address"
          id="address"
        />
      </div>

      <button
        className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600"
        type="submit"
      >
        Create User
      </button>
    </form>
  );
}

export default CreateUserForm;
