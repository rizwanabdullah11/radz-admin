export interface User {
  id: string
  name: string
  email: string
  phone: string
  role: 'driver' | 'advertiser'
  status: 'active' | 'inactive' | 'suspended'
  createdAt: Date
  vehicle?: {
    type: 'car' | 'motorbike' | 'rickshaw'
    model: string
    color: string
    registration: string
  }
  wallet?: 'jazzcash' | 'easypaisa'
  totalEarnings?: number
  campaignsCompleted?: number
}

export interface Campaign {
  id: string
  name: string
  advertiserId: string
  advertiserName: string
  creative: string
  budget: number
  spent: number
  duration: number
  startDate: Date
  endDate: Date
  status: 'draft' | 'active' | 'paused' | 'completed' | 'cancelled'
  targetAudience: {
    cities: string[]
    vehicleTypes: string[]
    geoFence?: {
      lat: number
      lng: number
      radius: number
    }
  }
  payoutRate: number
  impressions: number
  kilometers: number
  driversCount: number
}

export interface Analytics {
  totalUsers: number
  totalDrivers: number
  totalAdvertisers: number
  totalCampaigns: number
  activeCampaigns: number
  totalRevenue: number
  monthlyRevenue: number
  totalImpressions: number
  totalKilometers: number
  averageEarningsPerDriver: number
}

export interface Earning {
  id: string
  userId: string
  campaignId: string
  amount: number
  kilometers: number
  date: Date
  status: 'pending' | 'paid'
}