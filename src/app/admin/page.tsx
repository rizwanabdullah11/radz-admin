import { AdminHeader } from "@/components/layout/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { formatCurrency } from "@/lib/utils"
import {
  Users,
  Car,
  Megaphone,
  TrendingUp,
  DollarSign,
  Eye,
  MapPin,
  Award,
} from "lucide-react"

// Mock data - in real app, this would come from your database
const stats = {
  totalUsers: 8547,
  totalDrivers: 6234,
  totalAdvertisers: 89,
  totalCampaigns: 156,
  activeCampaigns: 23,
  totalRevenue: 4250000,
  monthlyRevenue: 850000,
  totalImpressions: 2450000,
  totalKilometers: 125000,
  averageEarningsPerDriver: 1850,
}

const recentActivity = [
  {
    id: 1,
    type: "campaign",
    message: "New campaign 'Shan Spices Ramadan' launched",
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "user",
    message: "50 new drivers registered today",
    time: "4 hours ago",
  },
  {
    id: 3,
    type: "payment",
    message: "Weekly payments processed: PKR 125,000",
    time: "1 day ago",
  },
  {
    id: 4,
    type: "milestone",
    message: "Reached 8,500 total users milestone",
    time: "2 days ago",
  },
]

export default function AdminDashboard() {
  return (
    <div className="flex-1 overflow-auto">
      <AdminHeader
        title="Dashboard"
        description="Overview of your Radz platform performance"
      />
      
      <div className="p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {stats.totalDrivers.toLocaleString()} drivers, {stats.totalAdvertisers} advertisers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <Megaphone className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeCampaigns}</div>
              <p className="text-xs text-muted-foreground">
                {stats.totalCampaigns} total campaigns
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(stats.monthlyRevenue)}</div>
              <p className="text-xs text-muted-foreground">
                {formatCurrency(stats.totalRevenue)} total revenue
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{(stats.totalImpressions / 1000000).toFixed(1)}M</div>
              <p className="text-xs text-muted-foreground">
                {stats.totalKilometers.toLocaleString()} km covered
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Performance Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Overview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Car className="h-4 w-4 text-blue-500" />
                  <span className="text-sm">Average Driver Earnings</span>
                </div>
                <span className="font-semibold">{formatCurrency(stats.averageEarningsPerDriver)}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Coverage Area</span>
                </div>
                <span className="font-semibold">Islamabad & Rawalpindi</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-purple-500" />
                  <span className="text-sm">Growth Rate</span>
                </div>
                <span className="font-semibold text-green-600">+24%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Award className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm">Campaign Completion Rate</span>
                </div>
                <span className="font-semibold">87%</span>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}