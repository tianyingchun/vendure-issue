import { AlertCircle, CheckCircle, Clock, XCircle } from 'lucide-react';
import { Badge, type DataDisplayComponentProps } from '@vendure/dashboard';

export function JsonDisplayComponent({ value }: DataDisplayComponentProps) {
  const getStatusConfig = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'active':
      case 'approved':
      case 'completed':
        return {
          variant: 'default' as const,
          icon: CheckCircle,
          className: 'bg-green-100 text-green-800 border-green-200',
        };
      case 'pending':
      case 'processing':
        return {
          variant: 'secondary' as const,
          icon: Clock,
          className: 'bg-yellow-100 text-yellow-800 border-yellow-200',
        };
      case 'cancelled':
      case 'rejected':
        return {
          variant: 'destructive' as const,
          icon: XCircle,
          className: 'bg-red-100 text-red-800 border-red-200',
        };
      default:
        return {
          variant: 'outline' as const,
          icon: AlertCircle,
          className: 'bg-gray-100 text-gray-800 border-gray-200',
        };
    }
  };

  const config = getStatusConfig(value);
  const Icon = config.icon;

  return (
    <Badge
      variant={config.variant}
      className={`flex items-center gap-1 ${config.className}`}
    >
      <Icon className="h-3 w-3" />
      {value || 'Unknown'}
    </Badge>
  );
}
