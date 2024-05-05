type UserDetailsProps = {
  params: {
    name: string;
  };
};

function UserDetails({ params }: UserDetailsProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome {params.name}</h1>
    </main>
  );
}

export default UserDetails;
