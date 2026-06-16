function UserCard({ user }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-lg font-bold text-indigo-600 dark:text-indigo-300">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-semibold text-gray-800  dark:text-gray-100">
            {user.name}
          </h3>
          <p className="text-sm text-gray-500  dark:text-gray-400">
            {user.company.name}
          </p>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-gray-600 dark:text-gray-300 slext items-center gap-2">
          <span>📧</span>
          <span>{user.email}</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 flext items-center gap-2">
          <span>📞</span>
          <span>{user.phone}</span>
        </p>
        <p className="text-sm text-gray-600 dark:text-grauy-300 flext items-center gap-2">
          <span>🌐</span>
          <span>{user.website}</span>
        </p>
      </div>
    </div>
  );
}

export default UserCard;
