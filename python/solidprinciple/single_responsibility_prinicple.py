from pathlib import Path
from zipfile import ZipFile



#Single Responsibilty Principle
class  FileManager:
    def __init__(self,fileName):
        self.path = Path(fileName)

    
    def read (self,encoding="utf-8"):
        return self.path.read_text(encoding=encoding)
    
    def write (self,data,encoding ="utf-8"):
        return self.path.write_text(data,encoding=encoding)
    
    def compress (self):
        with ZipFile(self.path.with_suffix(".zip"),mode="w") as archive:
            archive.write(self.path)

    def decompress(self):
        with ZipFile(self.path.with_suffix(".zip"),mode="r") as archive:
            archive.extractall(self.path)


class ZipFileManagr:
    def __init__(self,fileName):
        self.path = Path(fileName)

    def compress(self):
        with ZipFile(self.path.with_suffix(".zip"),mode="w") as archive:
            archive.write(self.path)

    def decompress(self):
        with ZipFile(self.path.with_suffix(".zip"),mode ="r") as archive:
            archive.extractall(self.path)



fileManager = FileManager("testFile.txt")
fileManager.write("rohit kumar tiwari text")
print(fileManager.read())



    
