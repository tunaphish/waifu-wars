$filenames = Get-ChildItem "C:\Users\tunap\Downloads\Persona 3" -name

foreach ($filename in $filenames) {
	$name = (Get-Culture).TextInfo.ToTitleCase($filename.replace(".png", "").split("-"))
	Write-host "INSERT INTO waifu(waifuName, picture) VALUES('$name', '$filename');"
}

foreach ($filename in $filenames) {
	$name = (Get-Culture).TextInfo.ToTitleCase($filename.replace(".png", "").split("-"))
  Write-host "INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES("
  Write-host "  (SELECT divisionId"
  Write-host "  FROM division"
  Write-host "  WHERE divisionName = 'Persona Series'),"
  Write-host "  (SELECT waifuId"
  Write-host "  FROM waifu"
  Write-host "  WHERE waifuName = '$name'), 1400);"
}
