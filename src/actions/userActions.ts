"use server";

import { redirect } from "next/navigation";

// export async function getUser() {
//   const res = await fetch('http://localhost:3000/api/user');
//   return res.json();
// }

export async function getUser() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { name: "Michael Corleani" };
}

export async function createUser(formData: FormData) {
    const name = formData.get('username');
    const age = formData.get('age');
    const address = formData.get('address');

    redirect(`/user/${name}`);
}
