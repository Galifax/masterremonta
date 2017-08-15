(function() {

    // event.type должен быть keypress
    function getChar(event) {
      if (event.which == null) { // IE
        if (event.keyCode < 32) return null; // спец. символ
        return String.fromCharCode(event.keyCode);
      }

      if (event.which != 0 && event.charCode != 0) { // все кроме IE
        if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
      }

      return null; // спец. символ
    }

    $(document).ready(function() {

        // Price-list big screen

        $('#p2, #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10 ').hide('slow');
        $('#but1').addClass('active');

        $('#but1').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p2, #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10  ').hide('slow');
            $(' #p1').show('slow');
        });
        $('#but2').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p1, #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10  ').hide('slow');
            $(' #p2').show('slow');
        });
        $('#but3').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p1, #p2, #p4, #p5, #p6, #p7, #p8, #p9, #p10  ').hide('slow');
            $(' #p3').show('slow');
        });
        $('#but4').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p1, #p2, #p3, #p5, #p6, #p7, #p8, #p9, #p10 ').hide('slow');
            $(' #p4').show('slow');
        });
        $('#but5').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p1, #p2, #p3, #p4, #p6, #p7, #p8, #p9, #p10 ').hide('slow');
            $(' #p5').show('slow');
        });
        $('#but6').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p1, #p2, #p3, #p4, #p5, #p7, #p8, #p9, #p10 ').hide('slow');
            $(' #p6').show('slow');
        });
        $('#but7').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p1, #p2, #p3, #p4, #p5, #p6, #p8, #p9, #p10 ').hide('slow');
            $(' #p7').show('slow');
        });
        $('#but8').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p1, #p2, #p3, #p4, #p5, #p6, #p7, #p9, #p10 ').hide('slow');
            $(' #p8').show('slow');
        });
        $('#but9').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p1, #p2, #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10 ').hide('slow');
            $(' #p9').show('slow');
        });
        $('#but10').click(function() {
            $(this).addClass('active');
            $('.ps__button-group a.btn').not(this).removeClass('active');
            $('#p1, #p2, #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10 ').hide('slow');
            $(' #p10').show('slow');
        });


        // Price-list small screen
        $('#p2, #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10  ').hide('slow');
        $('#but11').click(function() {
            $('#p2, #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10  ').hide('slow');
            $(' #p1').show('slow');
        });
        $('#but21').click(function() {
            $('#p1, #p3, #p4, #p5, #p6, #p7, #p8, #p9, #p10  ').hide('slow');
            $(' #p2').show('slow');
        });
        $('#but31').click(function() {
            $('#p1, #p2, #p4, #p5, #p6, #p7, #p8, #p9, #p10  ').hide('slow');
            $(' #p3').show('slow');
        });
        $('#but41').click(function() {
            $('#p1, #p2, #p3, #p5, #p6, #p7, #p8, #p9, #p10 ').hide('slow');
            $(' #p4').show('slow');
        });
        $('#but51').click(function() {
            $('#p1, #p2, #p3, #p4, #p6, #p7, #p8, #p9, #p10 ').hide('slow');
            $(' #p5').show('slow');
        });
        $('#but61').click(function() {
            $('#p1, #p2, #p3, #p4, #p5, #p7, #p8, #p9, #p10 ').hide('slow');
            $(' #p6').show('slow');
        });
        $('#but71').click(function() {
            $('#p1, #p2, #p3, #p4, #p5, #p6, #p8, #p9, #p10 ').hide('slow');
            $(' #p7').show('slow');
        });
        $('#but81').click(function() {
            $('#p1, #p2, #p3, #p4, #p5, #p6, #p7, #p9, #p10 ').hide('slow');
            $(' #p8').show('slow');
        });
        $('#but91').click(function() {
            $('#p1, #p2, #p3, #p4, #p5, #p6, #p7, #p8, #p10 ').hide('slow');
            $(' #p9').show('slow');
        });
        $('#but101').click(function() {
            $('#p1, #p2, #p3, #p4, #p5, #p6, #p7, #p8, #p9 ').hide('slow');
            $(' #p10').show('slow');
        });


        $('.ps__sum-table').on('keypress', 'input', function(e) {

            if ( !getChar(e).match(/\d/) ) {
                return false;
            }
        });

         $('.ps__sum-table').on('paste', 'input', function(e) {
            return false;
         });


        $('.ps__sum-table').on('keyup', 'input', function(e) {
            var $sumTalbe = $('.ps__sum-table');
            var $target = $(e.target);
            var $tableRow = $target.closest('.ps__table-row');
            var $sumField = $tableRow.find('.sum');
            var $sumMain = $sumTalbe.find('.sum-main');
            var sum = 0;
            var genSum = 0;
            if ( $target.val() !== '' ) {
                sum = parseInt($target.val()) * parseInt($tableRow.data('price'));
                $tableRow.data('sum', sum);
                $sumField.text(sum + ' грн');
            } else {
                $tableRow.data('sum', '0');
                $sumField.text('');
            }
            $sumTalbe.find('tbody>tr').each(function(index) {
                genSum += parseInt($(this).data('sum')) || 0;
            });
            $sumMain.text(genSum + ' грн');
        });

        $('.ps__sum-table').on('click', '.ps__btn-close', function(e) {
            var $target = $(e.target);
            var $sumTalbe = $('.ps__sum-table');
            var $sumMain = $sumTalbe.find('.sum-main');
            var $tableRow = $target.closest('tr');
            var $other = $tableRow.siblings();
            var genSum = 0;
            $tableRow.remove();
            if ($other.lenth !== 0) {
                $other.each(function(i) {
                    $(this).find('th').text(i + 1);
                });
            }
            $sumTalbe.find('tbody>tr').each(function(index) {
                genSum += parseInt($(this).data('sum')) || 0;
            });
            $sumMain.text(genSum + ' грн');
        });

        $('.ps__table').on('click', '.ps__btn-add', function(e) {
            var $target = $(e.target);
            var $tablerow = $target.closest('tr');
            var $sumTalbe = $('.ps__sum-table');
            var data = {
                price: $tablerow.data('price') || '0',
                usluga: $tablerow.find('.usluga').text() || '',
                unit: $tablerow.find('.unit').text() || '',
                unitPrice: $tablerow.find('.unit-price').text() || ''
            };

            if ( $target.hasClass('ps__btn-add--disabled') ) {
                return;
            } else {
                $target.addClass('ps__btn-add--disabled');
            }

            $sumTalbe
                .find('tbody')
                .append(
                    $(['<tr class="ps__table-row" data-price="' + data.price + '">',
                        '<th scope="row"></th>',
                        '<td>' + data.usluga + '</td>',
                        '<td><input class="form-control" type="text" placeholder="0" maxlength="6"></td>',
                        '<td>' + data.unit + '</td>',
                        '<td>' + data.unitPrice + '</td>',
                        '<td class="sum"></td>',
                        '<td class="js-close"><button type="button" class="ps__btn-close btn btn-default btn-sm">X</button></td>',
                    '</tr>'].join('')).bind('click', function(e) {
                        if ( $(e.target).hasClass('ps__btn-close') ) {
                            $target.removeClass('ps__btn-add--disabled');
                        }
                    })
                );
            var $tableRows = $('.ps__sum-table>tbody>tr');

            if ($tableRows.lenth !== 0) {
                $tableRows.each(function(i) {
                    $(this).find('th').text(i + 1);
                });
            }

        });


    });
}());