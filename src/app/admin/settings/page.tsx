"use client"

import { useState } from "react"
import { AdminHeader } from "@/components/layout/admin-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Settings,
  DollarSign,
  MapPin,
  Bell,
  Shield,
  Palette,
  Save,
  RefreshCw,
} from "lucide-react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    // Platform Settings
    platformName: "Radz",
    supportEmail: "support@radz.pk",
    maintenanceMode: false,
    
    // Pricing Settings
    basePayout: 10,
    cityMultipliers: {
      islamabad: 1.2,
      rawalpindi: 1.0,
      lahore: 1.1,
      karachi: 1.3,
    },
    vehicleMultipliers: {
      car: 1.0,
      motorbike: 0.7,
      rickshaw: 0.8,
      suv: 1.5,
    },
    commissionRate: 30,
    
    // Notifications
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    
    // Security
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordPolicy: "strong",
    
    // Features
    arPreview: true,
    geoFencing: true,
    gamification: true,
    multiLanguage: true,
  })

  const handleSave = () => {
    // Save settings logic
    console.log("Saving settings:", settings)
  }

  return (
    <div className="flex-1 overflow-auto">
      <AdminHeader
        title="Settings"
        description="Configure platform settings and preferences"
      />
      
      <div className="p-6">
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
          </TabsList>

          {/* General Settings */}
          <TabsContent value="general">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Settings className="h-5 w-5" />
                    <span>Platform Configuration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="platformName">Platform Name</Label>
                    <Input
                      id="platformName"
                      value={settings.platformName}
                      onChange={(e) => setSettings({ ...settings, platformName: e.target.value })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="supportEmail">Support Email</Label>
                    <Input
                      id="supportEmail"
                      type="email"
                      value={settings.supportEmail}
                      onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Maintenance Mode</Label>
                      <p className="text-sm text-gray-500">
                        Enable to temporarily disable the platform
                      </p>
                    </div>
                    <Switch
                      checked={settings.maintenanceMode}
                      onCheckedChange={(checked) => 
                        setSettings({ ...settings, maintenanceMode: checked })
                      }
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Regional Settings</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label>Default Currency</Label>
                    <Select defaultValue="PKR">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PKR">Pakistani Rupee (PKR)</SelectItem>
                        <SelectItem value="USD">US Dollar (USD)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Default Language</Label>
                    <Select defaultValue="en">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="ur">Urdu</SelectItem>
                        <SelectItem value="ur-roman">Roman Urdu</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Time Zone</Label>
                    <Select defaultValue="PKT">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="PKT">Pakistan Standard Time</SelectItem>
                        <SelectItem value="UTC">UTC</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pricing Settings */}
          <TabsContent value="pricing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5" />
                    <span>Payout Configuration</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="basePayout">Base Payout Rate (PKR/km)</Label>
                    <Input
                      id="basePayout"
                      type="number"
                      value={settings.basePayout}
                      onChange={(e) => setSettings({ 
                        ...settings, 
                        basePayout: parseInt(e.target.value) 
                      })}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="commissionRate">Commission Rate (%)</Label>
                    <Input
                      id="commissionRate"
                      type="number"
                      value={settings.commissionRate}
                      onChange={(e) => setSettings({ 
                        ...settings, 
                        commissionRate: parseInt(e.target.value) 
                      })}
                    />
                  </div>
                  
                  <div>
                    <Label>City Multipliers</Label>
                    <div className="space-y-2 mt-2">
                      {Object.entries(settings.cityMultipliers).map(([city, multiplier]) => (
                        <div key={city} className="flex items-center justify-between">
                          <span className="capitalize">{city}</span>
                          <Input
                            type="number"
                            step="0.1"
                            value={multiplier}
                            onChange={(e) => setSettings({
                              ...settings,
                              cityMultipliers: {
                                ...settings.cityMultipliers,
                                [city]: parseFloat(e.target.value)
                              }
                            })}
                            className="w-20"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Vehicle Multipliers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(settings.vehicleMultipliers).map(([vehicle, multiplier]) => (
                    <div key={vehicle} className="flex items-center justify-between">
                      <div>
                        <Label className="capitalize">{vehicle}</Label>
                        <p className="text-sm text-gray-500">
                          {multiplier}x base rate
                        </p>
                      </div>
                      <Input
                        type="number"
                        step="0.1"
                        value={multiplier}
                        onChange={(e) => setSettings({
                          ...settings,
                          vehicleMultipliers: {
                            ...settings.vehicleMultipliers,
                            [vehicle]: parseFloat(e.target.value)
                          }
                        })}
                        className="w-20"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="h-5 w-5" />
                  <span>Notification Preferences</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-gray-500">
                      Send notifications via email
                    </p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => 
                      setSettings({ ...settings, emailNotifications: checked })
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-gray-500">
                      Send notifications via SMS
                    </p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => 
                      setSettings({ ...settings, smsNotifications: checked })
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Push Notifications</Label>
                    <p className="text-sm text-gray-500">
                      Send push notifications to mobile apps
                    </p>
                  </div>
                  <Switch
                    checked={settings.pushNotifications}
                    onCheckedChange={(checked) => 
                      setSettings({ ...settings, pushNotifications: checked })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>Security Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">
                      Require 2FA for admin accounts
                    </p>
                  </div>
                  <Switch
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => 
                      setSettings({ ...settings, twoFactorAuth: checked })
                    }
                  />
                </div>
                
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.sessionTimeout}
                    onChange={(e) => setSettings({ 
                      ...settings, 
                      sessionTimeout: parseInt(e.target.value) 
                    })}
                  />
                </div>
                
                <div>
                  <Label>Password Policy</Label>
                  <Select 
                    value={settings.passwordPolicy}
                    onValueChange={(value) => setSettings({ ...settings, passwordPolicy: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic (8+ characters)</SelectItem>
                      <SelectItem value="strong">Strong (8+ chars, mixed case, numbers)</SelectItem>
                      <SelectItem value="complex">Complex (12+ chars, symbols required)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Features */}
          <TabsContent value="features">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Palette className="h-5 w-5" />
                  <span>Feature Toggles</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>AR Preview</Label>
                    <p className="text-sm text-gray-500">
                      Enable augmented reality sticker preview
                    </p>
                  </div>
                  <Switch
                    checked={settings.arPreview}
                    onCheckedChange={(checked) => 
                      setSettings({ ...settings, arPreview: checked })
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Geo-fencing</Label>
                    <p className="text-sm text-gray-500">
                      Allow location-based campaign targeting
                    </p>
                  </div>
                  <Switch
                    checked={settings.geoFencing}
                    onCheckedChange={(checked) => 
                      setSettings({ ...settings, geoFencing: checked })
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Gamification</Label>
                    <p className="text-sm text-gray-500">
                      Enable points, leaderboards, and rewards
                    </p>
                  </div>
                  <Switch
                    checked={settings.gamification}
                    onCheckedChange={(checked) => 
                      setSettings({ ...settings, gamification: checked })
                    }
                  />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Multi-language Support</Label>
                    <p className="text-sm text-gray-500">
                      Support for Urdu, Roman Urdu, and English
                    </p>
                  </div>
                  <Switch
                    checked={settings.multiLanguage}
                    onCheckedChange={(checked) => 
                      setSettings({ ...settings, multiLanguage: checked })
                    }
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Save Actions */}
        <div className="flex items-center justify-end space-x-4 mt-6">
          <Button variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Reset to Defaults
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  )
}