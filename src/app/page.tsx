"use client";

import CreateUserForm from "@/components/create-user-form";
import { createUser as createUserAction } from "@/actions/userActions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CreateUserForm createUserAction={createUserAction} />
    </main>
  );
}
