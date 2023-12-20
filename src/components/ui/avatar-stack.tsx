"use client";
import React from "react";
import { MAX_AVATAR_COUNT } from "@/utils/constants";
import { cn, getAvatarColour, getInitialsFromFirstAndLastName } from "@/utils";
import {
  AvatarContainer,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export const AvatarStackSkeleton = ({ size }: { size: string }) => {
  const sizeClasses: any = {
    sm: "h-6 w-6 ml-[-12px]",
    large: "h-12 w-12 ml-[-16px]",
  };
  return (
    <div className="flex flex-row items-center ml-[16px]">
      {Array.from(Array(MAX_AVATAR_COUNT).keys()).map((index) => {
        return (
          <Skeleton
            key={index}
            className={cn(
              `border-2 border-background rounded-full ml-[-16px]`,
              sizeClasses[size],
            )}
          />
        );
      })}
    </div>
  );
};

export const AvatarStack = ({
  users,
  size,
}: {
  users: any[];
  size: string;
}) => {
  const avatarIndexes = ["z-30", "z-20", "z-10"];
  const sizeClasses: any = {
    sm: "h-6 w-6 ml-[-12px]",
    large: "h-12 w-12 ml-[-16px]",
  };

  return (
    <div className="flex flex-row items-center transition-all ml-[16px]">
      {users.slice(0, MAX_AVATAR_COUNT).map((user, index) => {
        const { id, has_image, image_url, first_name, last_name } = user;
        return (
          <AvatarContainer
            key={id}
            aria-label={`${first_name} ${last_name}`}
            data-microtip-position="top"
            role="tooltip"
            className={cn(
              avatarIndexes[index],
              `border-2 border-background transition-all ml-[-16px]`,
              sizeClasses[size],
            )}
          >
            {has_image && <AvatarImage src={image_url} alt={first_name} />}
            <AvatarFallback
              className={cn(
                "bg-[#ffffff] text-[#000000] font-medium",
                getAvatarColour(last_name),
              )}
            >
              {getInitialsFromFirstAndLastName(first_name, last_name)}
            </AvatarFallback>
          </AvatarContainer>
        );
      })}
      {users.length > MAX_AVATAR_COUNT && (
        <AvatarContainer
          aria-label={`${users.length - MAX_AVATAR_COUNT} more`}
          data-microtip-position="top"
          role="tooltip"
          className={cn(
            "border-2 border-background ml-[-16px] group-hover:ml-0",
            sizeClasses[size],
          )}
        >
          <AvatarFallback>+{users.length - MAX_AVATAR_COUNT}</AvatarFallback>
        </AvatarContainer>
      )}
    </div>
  );
};
