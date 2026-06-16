import { useFetch } from "../hooks/useFetch/useFetch";
import UserCard from "../components/userCard/UserCard";
import UserCardSkeleton from "../components/UserCardSkeleton/UserCardSkeleton";

function Users() {
  const {
    data: users,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 ">
            Users
          </h2>
          <p className=" text-gray-500 dark:text-gray-400 , mt-1">
            Manage your team members
          </p>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6 text-center">
          <p className="text-red-600 dark:text-red-400 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      )}

      <div className="grid grid-color-1 sm:grid-cols-2 lg:gris-cols-3 gap-4">
        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <UserCardSkeleton key={index} />
          ))}

        {!loading &&
          !error &&
          users &&
          users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
}

export default Users;
