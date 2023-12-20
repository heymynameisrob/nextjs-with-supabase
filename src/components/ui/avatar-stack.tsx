'use client';
import React, { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MAX_AVATAR_COUNT } from "@/lib/constants";
import { cn, getAvatarColour, getInitialsFromFirstAndLastName } from "@/utils";
import { AvatarContainer, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from '@/components/ui/skeleton';

export const AvatarStackSkeleton = ({size}: {size: string}) => {
  const sizeClasses: any = {
    'sm': 'h-6 w-6 ml-[-12px]',
    'large': 'h-12 w-12 ml-[-16px]',
  }
  return(
    <div className="flex flex-row items-center ml-[16px]">
      {Array.from(Array(MAX_AVATAR_COUNT).keys()).map((index) => {
        return (
          <Skeleton key={index} className={cn(`border-2 border-background rounded-full ml-[-16px]`, sizeClasses[size] )} />
        )
      })}
    </div>
  )
}

export const AvatarStack = ({users, size}: {users: any[], size: string}) => {

  const avatarIndexes = ['z-30','z-20','z-10'];  
  const sizeClasses: any = {
    'sm': 'h-6 w-6 ml-[-12px]',
    'large': 'h-12 w-12 ml-[-16px]',
  }

  return(    
    <div className="flex flex-row items-center transition-all ml-[16px]">
      {users.slice(0,MAX_AVATAR_COUNT).map((user, index) => {
        const { id, has_image, image_url, first_name, last_name } = user;
        return (
          <TooltipProvider key={id}>
           <Tooltip>
            <TooltipTrigger asChild>
              <AvatarContainer className={cn(avatarIndexes[index], `border-2 border-background transition-all ml-[-16px]`, sizeClasses[size] )}>
                {has_image && <AvatarImage src={image_url} alt={first_name} />}
                <AvatarFallback
                className={cn("bg-[#ffffff] text-[#000000] font-medium", getAvatarColour(last_name))}
                >{getInitialsFromFirstAndLastName(first_name, last_name)}</AvatarFallback>
              </AvatarContainer>
            </TooltipTrigger>
            <TooltipContent>
              {index === 0 ? 'You' : `${first_name} ${last_name}`}
            </TooltipContent>
           </Tooltip>
          </TooltipProvider>
        )
      })}
      {users.length > MAX_AVATAR_COUNT && 
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <AvatarContainer className={cn("border-2 border-background ml-[-16px] group-hover:ml-0", sizeClasses[size])}>        
              <AvatarFallback>+{users.length - MAX_AVATAR_COUNT}</AvatarFallback>
            </AvatarContainer>
          </TooltipTrigger>
          <TooltipContent>
            {users.slice(MAX_AVATAR_COUNT, users.length).map((user) => `${user.first_name} ${user.last_name}`).join(', ')}
          </TooltipContent>
        </Tooltip>
     </TooltipProvider>      
      }
    </div>
  )
}