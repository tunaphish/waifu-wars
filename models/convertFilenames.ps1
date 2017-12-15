$filenames = Get-ChildItem C:\Users\tunap\Downloads\Overwatch -name

foreach ($filename in $filenames) {
	$name = (Get-Culture).TextInfo.ToTitleCase($filename.replace(".jpg", "").split("-"))
	Write-host "INSERT INTO waifu(waifuName, picture) VALUES('$name', '$filename');"
}

foreach ($filename in $filenames) {
	$name = (Get-Culture).TextInfo.ToTitleCase($filename.replace(".jpg", "").split("-"))
  Write-host "INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES("
  Write-host   "(SELECT divisionId"
  Write-host   "FROM division"
  Write-host   "WHERE divisionName = 'Overwatch'),"
  Write-host   "(SELECT waifuId"
  Write-host   "FROM waifu"
  Write-host   "WHERE waifuName = '$name'), 1400);"
}
