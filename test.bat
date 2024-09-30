@echo off
set LOGFILE=cpu_usage_log.txt
echo Logging CPU usage... > %LOGFILE%
:loop
wmic cpu get loadpercentage >> %LOGFILE%
timeout /t 5 > nul  REM Wait for 5 seconds before the next log
goto loop
