import Layout from "./components/Layout/Layout";
import "./App.css";
import Users from "./pages/Users";
function App() {
  return (
    <Layout>
      <div className="mb-6">
        <h2 className=" text-2xl font-bold text-yellow-900 daek:text-gray-100 ">
          morning
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1 ">
          You will be perfect in your new work
        </p>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 ">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400  ">
            Total Users
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">
            12,430
          </p>
          <p className="text-sm text-green-500 mt-2">8.2% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 ">Revenue</p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">
            $48,290
          </p>
          <p className="text-sm text-green-500 mt-2">12.2% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 ">
            Active Project
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">
            24
          </p>
          <p className="text-sm text-green-500 mt-2">3.2% from last month</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400 ">
            Ticket Open
          </p>
          <p className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-2">
            8
          </p>
          <p className="text-sm text-green-500 mt-2">15% from last month</p>
        </div>
      </div>
      <div className=" b-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="font-semibold text-gray-700 dark:text-gray-200 mb-4 ml-4">
          Recent Activity
        </h3>
        <p className="text-gray-400 text-sm ml-4">
          Tommorow we connect this to a real API.
        </p>
      </div>
      <div className="mb-6 mt-2">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Good Morning
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Here's what's happening today.
        </p>
      </div>
      <Users/>
    </Layout>
  );
}

export default App;
