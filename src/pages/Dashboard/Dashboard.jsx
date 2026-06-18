
function Dashboard() {
    const stats = [
        { title: 'Total Users', value: '12,430', change: '8.2%', positive: 'true', icon: '👥' },
        { title: 'Revenue', value: '$48,290', change: '12.5%', positive: 'true', icon: '💰' },
        { title: 'Active Projects', value: '24', change: '3.1%', positive: 'false', icon: '📁' },
        { title: 'Tickets Open', value: '8', change: '15%', positive: 'false', icon: '🎫' },
    ]
    return (
        <div>
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                    Good Mornig
                </h2>
                <p className="text-gray-500 drk:text-gray-400 mt-1">
                    here is what is happening today.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {stats.map(stat => (
                    <div key={stat.title}
                        className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray200 dark:border-gray-700">
                        <div className="flex item-center justify-between mb-4">
                            <span className="text-sm font-meduim text-gray-500 dark:text-gray-400">
                                {stat.title}
                            </span>
                            <span className="text-2xl">{stat.icon}</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                            {stat.value}
                        </p>
                        <p className={`text-sm mt-2 ${stat.positive ? `text-green-500` : `text-red-500`}`}>
                            {stat.change} from last month
                        </p>
                    </div>))}
            </div>
            <div className="bg-white dark:bg-grauy-8000 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
                <h3 className=" font-semibold text-gray-700 dark:text-gray-200 mb-4">
                    Recent Activity
                </h3>
                <p className="text-gray-400 text-sm">
                    Tour activity will apear here.
                </p>
            </div>
        </div>
    )
}

export default Dashboard