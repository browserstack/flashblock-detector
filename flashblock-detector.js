flashBlockDetect = function(flashNotInstalled, flashDisabled){

	if ( navigator.plugins["Shockwave Flash"] ) {
		
		if (navigator.userAgent.indexOf('MSIE') > -1) {
		
			try {
	            
	            new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
	            
	        } catch (e) {
	        
	            if (flashDisabled && typeof(flashDisabled) === "function") {
					flashDisabled(); 
				}
	            
	        }
		
		}else{
		
			embed_length = $('embed').length;
			object_length = $('object').length;
			
			if( (embed_length > 0) || (object_length > 0) ){
				
				/* 
					Mac / Chrome using FlashBlock 
					Mac / Safari using AdBlock
				*/
				
				$('object, embed').each(function(){
								
					if( $(this).css('display') === 'none' ){
					
						if (flashDisabled && typeof(flashDisabled) === "function") {  
							flashDisabled(); 
						}
					
					}
								
				});
							
			}else{
				
				/* 
					
					Mac / Firefox using FlashBlock 
				
				*/
				
				if( $('div[bginactive]').length > 0 ){
					
					if (flashDisabled && typeof(flashDisabled) === "function") {  
						flashDisabled(); 
					}
				
				}
				
			}
		
		
		}
				
	}else{
		
		/* 
				
			If flash is not installed 
			
		*/
		
		if (flashNotInstalled && typeof(flashNotInstalled) === "function") {  
			flashNotInstalled(); 
		}
		
	}
	
}