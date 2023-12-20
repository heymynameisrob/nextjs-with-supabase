import { cn } from "@/utils";
import React from "react";

type DescriptionListProps = {
  children: React.ReactNode;
  className?: string;
};

type DescriptionListItemProps = {
  children: React.ReactNode;
  label: string;
  className?: string;
};

export const DescriptionList = ({
  children,
  className,
  ...props
}: DescriptionListProps) => {
  return (
    <dl className={cn("divide-y divide-outline", className)} {...props}>
      {children}
    </dl>
  );
};

export const DescriptionListItem = ({
  children,
  label,
  className,
  ...props
}: DescriptionListItemProps) => {
  return (
    <div
      className={cn("py-8 first-of-type:pt-0 space-y-4", className)}
      {...props}
    >
      <dt>
        <p className="text-base font-medium leading-6 text-primary">{label}</p>
      </dt>
      <dd>{children}</dd>
    </div>
  );
};

export const DescriptionListHeader = ({
  children,
  className,
  ...props
}: any) => {
  return (
    <div className={cn("pb-6", className)} {...props}>
      {children}
    </div>
  );
};
