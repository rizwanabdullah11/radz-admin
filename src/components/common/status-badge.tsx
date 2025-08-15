import { Badge } from "@/components/ui/badge"

interface StatusBadgeProps {
  status: string
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning"
}

export function StatusBadge({ status, variant }: StatusBadgeProps) {
  const getVariant = () => {
    if (variant) return variant
    
    switch (status.toLowerCase()) {
      case "active":
      case "completed":
      case "paid":
        return "success"
      case "inactive":
      case "suspended":
      case "cancelled":
        return "destructive"
      case "pending":
      case "draft":
        return "warning"
      case "paused":
        return "secondary"
      default:
        return "default"
    }
  }

  return (
    <Badge variant={getVariant()}>
      {status}
    </Badge>
  )
}