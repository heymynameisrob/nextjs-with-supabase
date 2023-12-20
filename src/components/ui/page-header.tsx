import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

/**
 * Page Header - Wrapped in a provider for the page, used on core menu pages to oritent the user and provide key actions
 * @param title - The title of the page
 * @param actions - The actions to be displayed on the right side of the header
 * @returns <PageHeader />
 */

type PageHeaderProps = {
  title: string;
  emoji?: string;
  description?: any;
  actions?: React.ReactNode;
};

export const PageHeader = async ({
  title,
  emoji,
  description,
  actions,
}: PageHeaderProps) => {
  return (
    <div className="flex items-center mb-8 justify-between">
      <div className="flex flex-row items-baseline gap-4">
        <div className="flex items-baseline gap-2">
          {emoji && <h1>{emoji}</h1>}
          <h1 className="font-medium">{title}</h1>
        </div>
        {description && <small>{description}</small>}
      </div>
      {actions && (
        <div className="flex items-center justify-end gap-4">{actions}</div>
      )}
    </div>
  );
};

export const PageHeaderSkeleton = () => (
  <div className="flex items-center mb-8 justify-between">
    <div className="flex flex-row items-baseline gap-4">
      <Skeleton className="w-[100px] h-6 rounded-md" />
      <Skeleton className="w-[80px] h-4 rounded-md" />
    </div>
    <div className="flex items-center justify-end gap-4">
      <Skeleton className="w-[80px] h-6 rounded-md" />
      <Skeleton className="w-[80px] h-6 rounded-md" />
    </div>
  </div>
);
