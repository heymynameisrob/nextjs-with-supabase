"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn, getAvatarColour, getInitialsFromFirstAndLastName } from "@/utils";

const AvatarContainer = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className,
    )}
    {...props}
  />
));
AvatarContainer.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full font-medium bg-ui-mid text-secondary cursor-default",
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Avatar = ({
  user,
  className,
  ...props
}: {
  user: any;
  className?: string;
}) => (
  <AvatarContainer
    aria-label={`${user.first_name} ${user.last_name}`}
    data-microtip-position="top"
    role="tooltip"
    className={className}
    {...props}
  >
    {user.has_image && (
      <AvatarImage src={user.image_url} alt={user.first_name} />
    )}
    <AvatarFallback
      className={cn(
        "font-medium pointer-events-none",
        getAvatarColour(user.last_name || "s"),
      )}
    >
      {getInitialsFromFirstAndLastName(user.first_name, user.last_name)}
    </AvatarFallback>
  </AvatarContainer>
);

export { Avatar, AvatarContainer, AvatarImage, AvatarFallback };
