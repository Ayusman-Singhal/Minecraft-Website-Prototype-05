"use client"

import * as React from "react"
import {
  Sheet as RadixSheet,
  SheetTrigger as RadixSheetTrigger,
  SheetPortal as RadixSheetPortal,
  SheetClose as RadixSheetClose,
  SheetOverlay as RadixSheetOverlay,
  SheetContent as RadixSheetContent,
  SheetHeader as RadixSheetHeader,
  SheetFooter as RadixSheetFooter,
  SheetTitle as RadixSheetTitle,
  SheetDescription as RadixSheetDescription,
} from "./sheet"

// Re-export Radix-based Sheet under Drawer names to avoid external vaul dependency
const Drawer = RadixSheet
const DrawerTrigger = RadixSheetTrigger
const DrawerPortal = RadixSheetPortal
const DrawerClose = RadixSheetClose
const DrawerOverlay = RadixSheetOverlay
const DrawerContent = RadixSheetContent
const DrawerHeader = RadixSheetHeader
const DrawerFooter = RadixSheetFooter
const DrawerTitle = RadixSheetTitle
const DrawerDescription = RadixSheetDescription

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}
