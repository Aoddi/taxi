<section class="footer-form" id="feedback">
    <div class="container__form">
        <div data-aos="zoom-in-left" class="form">
            <h2>Оставляйте заявку <p>на подключение к Яндекс.Такси</p></h2>
            <br>
            <br>
            <form class="feedback_form" name="feedback">
                <div>Имя</div>
                <input id="feedbackName" type="text" name="name" placeholder="Введите имя" required="required">
                <div>Номер телефона</div>
                <input value="" class="tel teltel" name="phone" id="phone" placeholder="Введите номер телефона" required="required">
                <div class="checkbox_form">
                    <input type="checkbox" name="chk">
                    <div class="conf_text">
                        <p>Даю согласие на обработку</p>
                        <a>персональных данных</a>
                    </div>
                </div>
                <br>
                <div>
                    <input class="form_btn" type="submit" name="submit_btn" value="Отправить заявку">
                </div>
            </form>
        </div>

    </div>
    <div class="container-img">
        <img class="mobile-footer-img" src="<?=SITE_TEMPLATE_PATH?>/images/footer-m.png" alt="">
        <div class="footer-img" alt=""></div>
    </div>
</section>
<footer id="footer">
    <!--  desktop-->
    <div class="container container-footer">
        <div class="footer-content">
            <div class="footer-item">
                <h2>Контакты</h2>
                <span class="gray">© <?= date( 'Y' );?>
                    <?$APPLICATION->IncludeComponent(
                        "bitrix:main.include",
                        "",
                        Array(
                            "AREA_FILE_SHOW" => "file",
                            "AREA_FILE_SUFFIX" => "",
                            "EDIT_TEMPLATE" => "",
                            "PATH" => "/local/include/name.php"
                        )
                    );?>
                </span>
            </div>

            <div class="footer-item__addr">
                <div class="">
                    <p style="padding-bottom: 24px"><?=$arContacts['ADDRESS']['VALUE']?></p>
                    <p>Время работы офиса:</p>
                    <p><?=$arContacts['OFFICE']['VALUE']?></p>
                    <p>Время работы диспетчерской:</p>
                    <p><?=$arContacts['CONTROL_ROOM']['VALUE']?></p><br><br>
                </div>
                <div class="">
                    <a class="gray" id="privacy">Политика конфиденциальности</a>
                </div>
            </div>

            <div class="footer-item">
                <div class="">
                    <a href="tel:<?=$arContacts['TEL']['VALUE']?>" class="gray bt"><?=$arContacts['TEL']['DISPLAY_VALUE']?></a><br>
                    <?php if($arContacts['FACEBOOK']['VALUE']): ?>
                        <a href="<?=$arContacts['FACEBOOK']['VALUE']?>" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/facebook.svg" alt=""></a>
                    <?php endif; ?>
                    <?php if($arContacts['YOUTUBE']['VALUE']): ?>
                        <a href="<?=$arContacts['YOUTUBE']['VALUE']?>" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/youtube.svg" alt=""></a>
                    <?php endif; ?>
                    <?php if($arContacts['INSTAGRAM']['VALUE']): ?>
                        <a href="<?=$arContacts['INSTAGRAM']['VALUE']?>" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/instagram.svg" alt=""></a>
                    <?php endif; ?>
                    <?php if($arContacts['TELEGRAM']['VALUE']): ?>
                        <a href="<?=$arContacts['TELEGRAM']['VALUE']?>" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/telegram.svg" alt=""></a>
                    <?php endif; ?>
                    <?php if($arContacts['VK']['VALUE']): ?>
                        <a href="<?=$arContacts['VK']['VALUE']?>" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/vk.svg" alt=""></a>
                    <?php endif; ?>
                </div>
                <a href="https://wptt.ru" target="_blank" class="gray">Разработка сайта — Вебпространство</a>
            </div>
        </div>
    </div>
    <!-- mobile -->
    <div class="container__mobfot">
        <div class="footer-mobile">
            <div class="">
                <h2>Контакты</h2>
                <br>
                <p style="padding-bottom: 24px">г. Уфа, ул. Тестовая, д. 28, стр. 1, офис 205</p>
                <p>Время работы офиса:</p>
                <p>Пн-пт с 10:00 до 19:00</p>
                <p>Время работы диспетчерской:</p>
                <p>с 9:00 до 21:00, без выходных</p><br>
                <div class="content">
                    <a href="tel:+79991234569" class="bt">+7 (999) 123-45-69</a><br><br>
                    <a href="" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/facebook.svg" alt=""></a>
                    <a href="" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/youtube.svg" alt=""></a>
                    <a href="" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/instagram.svg" alt=""></a>
                    <a href="" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/telegram.svg" alt=""></a>
                    <a href="" target="_blank"><img src="<?=SITE_TEMPLATE_PATH?>/images/vk.svg" alt=""></a>
                </div>
                <br>
                <a class="gray" id="privacy">Политика конфиденциальности</a>
                <p></p><br><br>
                <p class="gray">© <?= date( 'Y' );?>
                    <?$APPLICATION->IncludeComponent(
                        "bitrix:main.include",
                        "",
                        Array(
                            "AREA_FILE_SHOW" => "file",
                            "AREA_FILE_SUFFIX" => "",
                            "EDIT_TEMPLATE" => "",
                            "PATH" => "/local/include/name.php"
                        )
                    );?>
                </p>
                <a href="https://wptt.ru" target="_blank" class="gray">Разработка сайта — Вебпространство</a>
            </div>
        </div>
    </div>
</footer>
<a class="back_to_top" title="Наверх"></a>

<script>
    const formFeedback = document.querySelector('.feedback_form');

    formFeedback.addEventListener('submit', e => {
        e.preventDefault();

        let name = formFeedback.querySelector('#feedbackName').value;
        let tel = formFeedback.querySelector('#phone').value;

        const request = new XMLHttpRequest();
        const url = "/ajax/application.php";
        const params = "name=" + name+ "&tel=" + tel;

        request.responseType =	"json";
        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.addEventListener("readystatechange", () => {

            if (request.readyState === 4 && request.status === 200) {
                alert('Ваша заявка отправлена. В ближайшее время мы с вами свяжемся.')
            }

            if (request.status !== 200) {
                alert('Произошла ошибка, мы уже работаем над ее устранением.')
            }
        });

        request.send(params);
    })
</script>

<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
<script src="<?=SITE_TEMPLATE_PATH?>/js/main.js"></script>
<script src="<?=SITE_TEMPLATE_PATH?>/js/aos.js"></script>
<script>AOS.init();</script>
</body>
</html>