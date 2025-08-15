"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/layout/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Upload, Save, Eye } from "lucide-react"

export default function CreateCampaignPage() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    budget: "",
    duration: "",
    payoutRate: "",
    targetCities: [],
    vehicleTypes: [],
    geoFence: {
      enabled: false,
      lat: "",
      lng: "",
      radius: "",
    },
  })

  const cities = ["Islamabad", "Rawalpindi", "Lahore", "Karachi"]
  const vehicleTypes = ["car", "motorbike", "rickshaw"]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log("Campaign data:", formData)
  }

  return (
    <div className="flex-1 overflow-auto">
      <AdminHeader
        title="Create Campaign"
        description="Set up a new advertising campaign"
      />
      
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Campaign Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Campaign Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter campaign name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your campaign"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="budget">Budget (PKR)</Label>
                      <Input
                        id="budget"
                        type="number"
                        placeholder="500000"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="duration">Duration (Days)</Label>
                      <Input
                        id="duration"
                        type="number"
                        placeholder="30"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="payoutRate">Payout Rate (PKR/km)</Label>
                      <Input
                        id="payoutRate"
                        type="number"
                        placeholder="10"
                        value={formData.payoutRate}
                        onChange={(e) => setFormData({ ...formData, payoutRate: e.target.value })}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Creative Upload */}
              <Card>
                <CardHeader>
                  <CardTitle>Creative Assets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload your campaign creative (JPEG, PNG)
                    </p>
                    <p className="text-xs text-gray-500 mb-4">
                      Recommended: 24x12 inches for cars, 12x8 inches for motorbikes
                    </p>
                    <Button variant="outline">
                      Choose File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Targeting */}
              <Card>
                <CardHeader>
                  <CardTitle>Targeting</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Target Cities</Label>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {cities.map((city) => (
                        <div key={city} className="flex items-center space-x-2">
                          <Checkbox
                            id={city}
                            checked={formData.targetCities.includes(city)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  targetCities: [...formData.targetCities, city]
                                })
                              } else {
                                setFormData({
                                  ...formData,
                                  targetCities: formData.targetCities.filter(c => c !== city)
                                })
                              }
                            }}
                          />
                          <Label htmlFor={city}>{city}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <Label>Vehicle Types</Label>
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {vehicleTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={type}
                            checked={formData.vehicleTypes.includes(type)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setFormData({
                                  ...formData,
                                  vehicleTypes: [...formData.vehicleTypes, type]
                                })
                              } else {
                                setFormData({
                                  ...formData,
                                  vehicleTypes: formData.vehicleTypes.filter(t => t !== type)
                                })
                              }
                            }}
                          />
                          <Label htmlFor={type} className="capitalize">{type}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Geo-fencing */}
              <Card>
                <CardHeader>
                  <CardTitle>Geo-fencing (Optional)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="geoFence"
                      checked={formData.geoFence.enabled}
                      onCheckedChange={(checked) => 
                        setFormData({
                          ...formData,
                          geoFence: { ...formData.geoFence, enabled: checked }
                        })
                      }
                    />
                    <Label htmlFor="geoFence">Enable geo-fencing</Label>
                  </div>
                  
                  {formData.geoFence.enabled && (
                    <>
                      <div>
                        <Label htmlFor="lat">Latitude</Label>
                        <Input
                          id="lat"
                          placeholder="33.6844"
                          value={formData.geoFence.lat}
                          onChange={(e) => setFormData({
                            ...formData,
                            geoFence: { ...formData.geoFence, lat: e.target.value }
                          })}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lng">Longitude</Label>
                        <Input
                          id="lng"
                          placeholder="73.0479"
                          value={formData.geoFence.lng}
                          onChange={(e) => setFormData({
                            ...formData,
                            geoFence: { ...formData.geoFence, lng: e.target.value }
                          })}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="radius">Radius (km)</Label>
                        <Input
                          id="radius"
                          type="number"
                          placeholder="10"
                          value={formData.geoFence.radius}
                          onChange={(e) => setFormData({
                            ...formData,
                            geoFence: { ...formData.geoFence, radius: e.target.value }
                          })}
                        />
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>

              {/* Campaign Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Campaign Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Budget:</span>
                    <span className="font-medium">
                      {formData.budget ? `PKR ${parseInt(formData.budget).toLocaleString()}` : "Not set"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Duration:</span>
                    <span className="font-medium">
                      {formData.duration ? `${formData.duration} days` : "Not set"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Payout Rate:</span>
                    <span className="font-medium">
                      {formData.payoutRate ? `PKR ${formData.payoutRate}/km` : "Not set"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cities:</span>
                    <span className="font-medium">
                      {formData.targetCities.length || "None"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Vehicle Types:</span>
                    <span className="font-medium">
                      {formData.vehicleTypes.length || "None"}
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <div className="space-y-2">
                <Button type="submit" className="w-full">
                  <Save className="h-4 w-4 mr-2" />
                  Create Campaign
                </Button>
                <Button type="button" variant="outline" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}