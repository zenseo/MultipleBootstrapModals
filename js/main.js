$(function() {

    $('[data-toggle="modal"]').on('click', function(e){
        
        var href = $(this).attr('href');
        
        if (typeof href !== 'undefined' && href !== false){
        
            var $modal = $($(this).data('target'));
                $modal.addClass('loading');
                $modal.modal();
                
            $.ajax({
                url: href,
                dataType:"html",
                type:"GET",
                data: {},
                beforeSend: function(){	
                    $modal.bind('shown.bs.modal.loading',function(){
                        $(this).removeClass('in');
                        $('.modal-backdrop').addClass('loading');
                    });
                },
                complete: function( data, status ){
                        $('.modal-backdrop').removeClass('loading');
                        $modal.removeClass('loading');
                        $modal.unbind('shown.bs.modal.loading');
                        
                        if( status == 'success' ){
                            
                            $('.modal-content', $modal).html(data.responseText);
            
                        }else{
                            
                            $('.modal-content', $modal).html(status);
                        }
                        
                        $modal.addClass('in');
                }
            });
            e.preventDefault();
            return false;
        }
        
    });


});
