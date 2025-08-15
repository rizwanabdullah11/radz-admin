import { AdminHeader } from "@/components/layout/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { StatusBadge } from "@/components/common/status-badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { formatCurrency, formatDate } from "@/lib/utils"
import { Search, Filter, Download, UserPlus } from "lucide-react"
import type { User } from "@/lib/types"

// Mock data - in real app, this would come from your database
const users: User[] = [
  {
    id: "1",
    name: "Ahmed Khan",
    email: "ahmed.khan@email.com",
    phone: "+92-300-1234567",
    role: "driver",
    status: "active",
    createdAt: new Date("2024-01-15"),
    vehicle: {
      type: "car",
      model: "Toyota Corolla",
      color: "White",
      registration: "ABC-123",
    },
    wallet: "jazzcash",
    totalEarnings: 15000,
    campaignsCompleted: 8,
  },
  {
    id: "2",
    name: "Fatima Ali",
    email: "fatima.ali@email.com",
    phone: "+92-301-2345678",
    role: "driver",
    status: "active",
    createdAt: new Date("2024-02-01"),
    vehicle: {
      type: "motorbike",
      model: "Honda CD 70",
      color: "Red",
      registration: "DEF-456",
    },
    wallet: "easypaisa",
    totalEarnings: 8500,
    campaignsCompleted: 5,
  },
  {
    id: "3",
    name: "Shan Foods Ltd",
    email: "marketing@shan.com",
    phone: "+92-21-1234567",
    role: "advertiser",
    status: "active",
    createdAt: new Date("2024-01-10"),
  },
  {
    id: "4",
    name: "Muhammad Hassan",
    email: "hassan@email.com",
    phone: "+92-302-3456789",
    role: "driver",
    status: "suspended",
    createdAt: new Date("2024-03-01"),
    vehicle: {
      type: "rickshaw",
      model: "Qingqi Rickshaw",
      color: "Yellow",
      registration: "GHI-789",
    },
    wallet: "jazzcash",
    totalEarnings: 3200,
    campaignsCompleted: 2,
  },
  {
    id: "5",
    name: "Jazz Pakistan",
    email: "ads@jazz.com.pk",
    phone: "+92-21-9876543",
    role: "advertiser",
    status: "active",
    createdAt: new Date("2024-02-15"),
  },
]

const stats = {
  totalUsers: users.length,
  activeUsers: users.filter(u => u.status === "active").length,
  drivers: users.filter(u => u.role === "driver").length,
  advertisers: users.filter(u => u.role === "advertiser").length,
}

export default function UsersPage() {
  return (
    <div className="flex-1 overflow-auto">
      <AdminHeader
        title="Users"
        description="Manage drivers and advertisers on your platform"
      />
      
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUsers}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.activeUsers}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Drivers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.drivers}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Advertisers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.advertisers}</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Actions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Users</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Button size="sm">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Earnings</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Joined</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-500">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusBadge 
                        status={user.role} 
                        variant={user.role === "driver" ? "default" : "secondary"}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="text-sm">{user.phone}</div>
                      {user.wallet && (
                        <div className="text-xs text-gray-500 capitalize">{user.wallet}</div>
                      )}
                    </TableCell>
                    <TableCell>
                      {user.vehicle ? (
                        <div>
                          <div className="text-sm font-medium capitalize">
                            {user.vehicle.type}
                          </div>
                          <div className="text-xs text-gray-500">
                            {user.vehicle.model} • {user.vehicle.registration}
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </TableCell>
                    <TableCell>
                      {user.totalEarnings ? (
                        <div>
                          <div className="font-medium">
                            {formatCurrency(user.totalEarnings)}
                          </div>
                          <div className="text-xs text-gray-500">
                            {user.campaignsCompleted} campaigns
                          </div>
                        </div>
                      ) : (
                        <span className="text-gray-400">N/A</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={user.status} />
                    </TableCell>
                    <TableCell>{formatDate(user.createdAt)}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}