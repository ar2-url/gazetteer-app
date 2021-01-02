	$('#btnRun').click(function() {

		$.ajax({
			url: "php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				country: $('#selCountry').val(),
				lang: $('#selLanguage').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtContinentName').html(result['data'][0]['continentName']);
					$('#txtCountryName').html(result['data'][0]['countryName']);
					$('#txtCapital').html(result['data'][0]['capital']);
					$('#txtLanguages').html(result['data'][0]['languages']);
					$('#txtAreaInSqKm').html(result['data'][0]['areaInSqKm']);
					$('#txtPopulation').html(result['data'][0]['population']);
					$('#txtCurrencyCode').html(result['data'][0]['currencyCode']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	$('#btnRun2').click(function() {

		$.ajax({
			url: "php/getWikiInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				maxRows: $('#selRows').val(),
				q: $('#selQuery').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtFeature').html(result['data'][0]['feature']);
					$('#txtLng').html(result['data'][0]['lng']);
					$('#txtLat').html(result['data'][0]['lat']);
					$('#txtCountryCode').html(result['data'][0]['countryCode']);
					$('#txtThumbnailImg').html(result['data'][0]['thumbnailImg']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});

	$('#btnRun3').click(function() {

		$.ajax({
			url: "php/getNearbyInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lng: $('#selNearbyLng').val(),
				lat: $('#selNearbyLat').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtTitle').html(result['data'][0]['title']);
					$('#txtSummary').html(result['data'][0]['summary']);
					$('#txtDistance').html(result['data'][0]['distance']);
					$('#txtWikipediaUrl').html(result['data'][0]['wikipediaUrl']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});