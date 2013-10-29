#!/bin/sh
acpi -V
if cat /proc/acpi/battery/BAT1/state | grep "charging state" | grep -vE ":[\t ]*charging$"; then
    exit 1
else
    exit 0
fi
