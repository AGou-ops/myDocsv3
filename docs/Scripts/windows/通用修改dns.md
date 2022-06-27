
```bat
@echo off

systeminfo

if "%OS 名称%"=="%7%" goto windows7
:windows7
echo 正在设置本机主DNS ,请稍等……
netsh interface ip set dns name="本地连接" source=static addr=114.114.114.114 register=PRIMARY
echo 正在设置本机备用DNS ,请稍等……
netsh interface ip add dns name="本地连接" addr=223.5.5.5 index=2


if "%OS 名称%"=="%10%" goto windows10

:windows10
:: BatchGotAdmin
:-------------------------------------
REM --> Check for permissions
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
REM --> If error flag set, we do not have admin.
if '%errorlevel%' NEQ '0' (
echo Requesting administrative privileges...
goto UACPrompt
) else ( goto gotAdmin )
:UACPrompt
echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"
"%temp%\getadmin.vbs"
exit /B
:gotAdmin
if exist "%temp%\getadmin.vbs" ( del "%temp%\getadmin.vbs" )
pushd "%CD%"
CD /D "%~dp0"
:--------------------------------------

echo 正在设置本机主DNS ,请稍等……
netsh interface ip set dns name="以太网" source=static addr=114.114.114.114 register=PRIMARY
echo 正在设置本机备用DNS ,请稍等……
netsh interface ip add dns name="以太网" addr=223.5.5.5 index=2
echo 设置完成!
exit
```