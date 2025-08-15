import { AdminHeader } from "@/components/layout/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatCurrency } from "@/lib/utils"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import {
  TrendingUp,
  TrendingDown,
  Eye,
  MapPin,
  Car,
  DollarSign,
  Download,
  Calendar,
} from "lucide-react"

// Mock data for charts
const revenueData = [
  { month: "Jan", revenue: 320000, campaigns: 12 },
  { month: "Feb", revenue: 450000, campaigns: 18 },
  { month: "Mar", revenue: 680000, campaigns: 25 },
  { month: "Apr", revenue: 850000, campaigns: 32 },
  { month: "May", revenue: 920000, campaigns: 28 },
  { month: "Jun", revenue: 1100000, campaigns: 35 },
]

const impressionData = [
  { day: "Mon", impressions: 45000 },
  { day: "Tue", impressions: 52000 },
  { day: "Wed", impressions: 48000 },
  { day: "Thu", impressions: 61000 },
  { day: "Fri", impressions: 55000 },
  { day: "Sat", impressions: 67000 },
  { day: "Sun", impressions: 58000 },
]

const vehicleTypeData = [
  { name: "Cars", value: 65, color: "#3B82F6" },
  { name: "Motorbikes", value: 25, color: "#10B981" },
  { name: "Rickshaws", value: 10, color: "#F59E0B" },
]

const cityData = [
  { city: "Islamabad", drivers: 3500, revenue: 520000 },
  { city: "Rawalpindi", drivers: 2800, revenue: 380000 },
  { city: "Lahore", drivers: 1200, revenue: 180000 },
  { city: "Karachi", drivers: 800, revenue: 120000 },
]

export default function AnalyticsPage() {
  return (
    <div className="flex-1 overflow-auto">
      <AdminHeader
        title="Analytics"
        description="Track performance metrics and insights"
      />
      
      <div className="p-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(4320000)}</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2.4M</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8.2% from last week
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Drivers</CardTitle>
              <Car className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,300</div>
              <div className="flex items-center text-xs text-red-600">
                <TrendingDown className="h-3 w-3 mr-1" />
                -2.1% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Earnings/Driver</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(1850)}</div>
              <div className="flex items-center text-xs text-green-600">
                <TrendingUp className="h-3 w-3 mr-1" />
                +5.4% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Revenue Chart */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Revenue Trends</CardTitle>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => `${value / 1000}K`} />
                  <Tooltip 
                    formatter={(value) => [formatCurrency(value), "Revenue"]}
                  />
                  <Bar dataKey="revenue" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Impressions Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Daily Impressions</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={impressionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis tickFormatter={(value) => `${value / 1000}K`} />
                  <Tooltip 
                    formatter={(value) => [value.toLocaleString(), "Impressions"]}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="impressions" 
                    stroke="#10B981" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Vehicle Type Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={vehicleTypeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {vehicleTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${value}%`} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {vehicleTypeData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm">{item.name}</span>
                    </div>
                    <span className="text-sm font-medium">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* City Performance */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>City Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cityData.map((city) => (
                  <div key={city.city} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-blue-500" />
                      <div>
                        <div className="font-medium">{city.city}</div>
                        <div className="text-sm text-gray-500">
                          {city.drivers.toLocaleString()} drivers
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{formatCurrency(city.revenue)}</div>
                      <div className="text-sm text-gray-500">
                        {formatCurrency(Math.round(city.revenue / city.drivers))}/driver
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Export Options */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Export Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Monthly Report
              </Button>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Campaign Performance
              </Button>
              <Button variant="outline">
                <Car className="h-4 w-4 mr-2" />
                Driver Analytics
              </Button>
              <Button variant="outline">
                <MapPin className="h-4 w-4 mr-2" />
                Geographic Report
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}