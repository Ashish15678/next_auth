export default function userProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2>Profile</h2>
      <hr />

      <p className="text-4xl ">
        Profile Page of
        <span className="p-2 rounded bg-orange-500 text-black ">
          {params.id}
        </span>
        hub
      </p>
    </div>
  );
}
