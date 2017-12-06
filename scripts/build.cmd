@echo off
cd "../"
if exist "build" rmdir "build" /S/ Q
mkdir "build"
cd "build"
del *.* /F /Q
cd "../"
For %%a in (bundle.js, index.html) do xcopy %%a build /Y
"c:\Program Files\7-Zip\7z.exe" a -tzip "build/build.zip" "./build/*"
echo "Build was successful"