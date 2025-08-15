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
import { Search, Filter, Download, Plus, Eye, MapPin } from "lucide-react"
import Link from "next/link"
import type { Campaign } from "@/lib/types"

// Mock data - in real app, this would come from your database
const campaigns: Campaign[] = [
  {
    id: "1",
    name: "Shan Spices Ramadan Campaign",
    advertiserId: "3",
    advertiserName: "Shan Foods Ltd",
    creative: "/api/placeholder/300/200",
    budget: 500000,
    spent: 325000,
    duration: 30,
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-03-31"),
    status: "active",
    targetAudience: {
      cities: ["Islamabad", "Rawalpindi"],
      vehicleTypes: ["car", "motorbike"],
    },
    payoutRate: 10,
    impressions: 450000,
    kilometers: 32500,
    driversCount: 125,
  },
  {
    id: "2",
    name: "Jazz 4G Network Promotion",
    advertiserId: "5",
    advertiserName: "Jazz Pakistan",
    creative: "/api/placeholder/300/200",
    budget: 1000000,
    spent: 750000,
    duration: 45,
    startDate: new Date("2024-02-15"),
    endDate: new Date("2024-03-31"),
    status: "active",
    targetAudience: {
      cities: ["Islamabad", "Rawalpindi"],
      vehicleTypes: ["car", "motorbike", "rickshaw"],
      geoFence: {
        lat: 33.6844,
        lng: 73.0479,
        radius: 25,
      },
    },
    payoutRate: 12,
    impressions: 680000,
    kilometers: 62500,
    driversCount: 200,
  },
  {
    id: "3",
    name: "Local Restaurant Chain",
    advertiserId: "6",
    advertiserName: "Cafe Aylanto",
    creative: "/api/placeholder/300/200",
    budget: 150000,
    spent: 150000,
    duration: 15,
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-02-15"),
    status: "completed",
    targetAudience: {
      cities: ["Islamabad"],
      vehicleTypes: ["car"],
      geoFence: {
        lat: 33.7077,
        lng: 73.0659,
        radius: 10,
      },
    },
    payoutRate: 8,
    impressions: 125000,
    kilometers: 18750,
    driversCount: 45,
  },
  {
    id: "4",
    name: "Summer Sale Campaign",
    advertiserId: "7",
    advertiserName: "Khaadi",
    creative: "/api/placeholder/300/200",
    budget: 300000,
    spent: 0,
    duration: 20,
    startDate: new Date("2024-04-01"),
    endDate: new Date("2024-04-20"),
    status: "draft",
    targetAudience: {
      cities: ["Islamabad", "Rawalpindi"],
      vehicleTypes: ["car", "motorbike"],
    },
    payoutRate: 9,
    impressions: 0,
    kilometers: 0,
    driversCount: 0,
  },
]

const stats = {
  totalCampaigns: campaigns.length,
  activeCampaigns: campaigns.filter(c => c.status === "active").length,
  completedCampaigns: campaigns.filter(c => c.status === "completed").length,
  totalBudget: campaigns.reduce((sum, c) => sum + c.budget, 0),
  totalSpent: campaigns.reduce((sum, c) => sum + c.spent, 0),
}

export default function CampaignsPage() {
  return (
    <div className="flex-1 overflow-auto">
      <AdminHeader
        title="Campaigns"
        description="Manage advertising campaigns and track performance"
      />
      
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalCampaigns}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Active</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.activeCampaigns}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.completedCampaigns}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{formatCurrency(stats.totalBudget)}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{formatCurrency(stats.totalSpent)}</div>
            </CardContent>
          </Card>
        </div>

        {/* Campaigns Table */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>All Campaigns</CardTitle>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
                <Link href="/admin/campaigns/create">
                  <Button size="sm">
                    <Plus className="h-4 w-4 mr-2" />
                    New Campaign
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                <Input placeholder="Search campaigns..." className="pl-10" />
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Campaign</TableHead>
                  <TableHead>Advertiser</TableHead>
                  <TableHead>Budget</TableHead>
                  <TableHead>Performance</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {campaigns.map((campaign) => (
                  <TableRow key={campaign.id}>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-gray-200 rounded-md flex items-center justify-center">
                          <Eye className="h-4 w-4 text-gray-500" />
                        </div>
                        <div>
                          <div className="font-medium">{campaign.name}</div>
                          <div className="text-sm text-gray-500">
                            {campaign.driversCount} drivers • {campaign.targetAudience.vehicleTypes.join(", ")}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="font-medium">{campaign.advertiserName}</div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{formatCurrency(campaign.budget)}</div>
                        <div className="text-sm text-gray-500">
                          Spent: {formatCurrency(campaign.spent)}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm font-medium">
                          {(campaign.impressions / 1000).toFixed(0)}K impressions
                        </div>
                        <div className="text-xs text-gray-500">
                          {campaign.kilometers.toLocaleString()} km
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="text-sm font-medium">{campaign.duration} days</div>
                        <div className="text-xs text-gray-500">
                          {formatDate(campaign.startDate)} - {formatDate(campaign.endDate)}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={campaign.status} />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Link href={`/admin/campaigns/${campaign.id}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </Link>
                        {campaign.targetAudience.geoFence && (
                          <Button variant="ghost" size="sm">
                            <MapPin className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
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