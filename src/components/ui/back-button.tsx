'use client'
import React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

export const BackButton = () => {

  const router = useRouter();

  useHotkeys("esc", () => {
    router.back();
  });

  return(
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
          variant="ghost" 
          size="sm" 
          className="p-0 w-8 h-8 flex items-center justify-center"
          onClick={() => router.back() }>
            <ArrowLeft size={16} />
          </Button>
        </TooltipTrigger>
        <TooltipContent className="flex space-x-2">
          <span>Go back</span> 
          <code className="px-1.5 font-mono bg-white bg-opacity-20 rounded border-[0.5px] border-white border-opacity-5 text-white text-opacity-70">esc</code>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}