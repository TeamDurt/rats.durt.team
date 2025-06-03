<script lang="ts">
    import card1 from "$lib/assets/img/guide/1.png";
    import card2 from "$lib/assets/img/guide/2.png";
    import card3 from "$lib/assets/img/guide/3.png";
    import card4 from "$lib/assets/img/guide/4.png";
    import Download from "$lib/components/icons/Download.svelte";

    const cards = [
        { number: "1", image: card1, text: "Найдите подземелье" },
        { number: "2", image: card2, text: "Исследуйте его и найдите ключ" },
        { number: "3", image: card3, text: "Поместите ключ в алтарь" },
        { number: "4", image: card4, text: "Данж пройден. Поздравляем!" }
    ];

    let selectedCard = $state(0);

    const prevCard = () => {
        selectedCard = Math.max(0, selectedCard - 1);
    };

    const nextCard = () => {
        selectedCard = Math.min(cards.length - 1, selectedCard + 1);
    };
</script>

<h1 class="w-full text-3xl font-medium text-heading mt-16">Здравствуйте!</h1>
<p class="w-full mt-8 text-2xl font-light break-words">
    Это краткая информация об ивенте <span class="font-medium text-2xl">Ratsmania</span>. <br/><br/>
    Вас ждёт прохождение 4 подземелий, каждое из которых становится сложнее<br/>предыдущего. Однако путь прохождения каждого этапа остаётся неизменным:
</p>
<div class="flex flex-row items-center gap-8 mt-32">
    <button aria-label="Previous" onclick={prevCard}>
        <svg
            class="cursor-pointer"
            width="42"
            height="78"
            viewBox="0 0 117 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M115 1.79492L4 108.295L115 214.795" stroke="#515151" stroke-width="6"/>
        </svg>
    </button>
    <div class="w-[530px] h-[530px] bg-card-bg rounded-[40px] relative">
            {#each cards as card, i}
                <img
                    src={card.image}
                    alt="Card {i + 1}"
                    class="absolute bottom-0 left-1/2 -translate-x-1/2 w-full invisible opacity-0 transition-all"
                    class:visible={selectedCard === i}
                    class:opacity-100={selectedCard === i}
                />
                <p
                    class="absolute bottom-16 left-1/2 -translate-x-1/2 w-full text-center text-2xl text-heading font-extralight invisible opacity-0 transition-all"
                    class:visible={selectedCard === i}
                    class:opacity-100={selectedCard === i}
                >
                    {card.text}
                </p>
            {/each}
            <div class="absolute left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 w-16 h-16 flex justify-center items-center bg-card-bg rounded-full border-2 border-paragraph">
                {#each cards as card, i}
                    <span
                        class="text-4xl font-medium absolute invisible opacity-0 transition-all"
                        class:visible={selectedCard === i}
                        class:opacity-100={selectedCard === i}
                    >
                            {card.number}
                    </span>
                {/each}
            </div>
    </div>
    <button aria-label="Next" onclick={nextCard}>
        <svg
            class="cursor-pointer"
            width="42"
            height="78"
            viewBox="0 0 117 217"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2 214.795L113 108.295L2 1.79492" stroke="#515151" stroke-width="6"/>
        </svg>
    </button>
</div>
<div class="w-full grid grid-cols-2 gap-16 mt-48">
    <div class="flex flex-col gap-8">
        <h2 class="text-3xl text-heading font-medium">Записки</h2>
        <p class="text-2xl font-light break-words">
            Все найденные вами записки — это подсказки, оставленные <span class="font-medium text-2xl">Ратусом</span>, бывшим участником армии Чумы.<br/><br/>
            Когда-то он служил Чумному Доктору, но осознал зло его замыслов и решил помочь тем, кто осмелится бросить вызов.<br/><br/>
            Теперь он скрывается и оставляет вам записки с подсказками, чтобы вы смогли пройти подземелья, одолеть Чумного Доктора и, в конечном итоге, освободить Ратуса от его прошлого.<br/><br/>
            <span class="font-medium text-2xl">Прислушивайтесь к его словам</span> — он ваш тайный союзник в этом мраке.
        </p>
        <h2 class="text-3xl text-heading font-medium mt-8">Кулдаун</h2>
        <p class="text-2xl font-light break-words">
            После прохождения текущего подземелья, следующее станет доступно в течение суток.<br/>
            Отдохните, или разгадайте записки, которые вы нашли в данже.
        </p>
        <h2 class="text-3xl text-heading font-medium mt-8">Ресурспак</h2>
        <p class="text-2xl font-light break-words">
            Для прохождения ивента обязательно необходим ресурспак.<br/><br/>
            По умолчанию он должен автоматически загрузиться при входе на сервер.<br/><br/>
            Если вы отключили автоматическую загрузку, то вам нужно установить его вручную, используя прилагаемый файл:
        </p>
    </div>
    <div class="flex flex-col gap-8">
        <h2 class="text-3xl text-heading font-medium">Правила</h2>
        <div class="text-2xl font-light break-words">
            <h3 class="font-medium text-2xl">1. Лут принадлежит нашедшему.</h3>
            Всё, что вы найдёте в данжах — ваши законные трофеи. Кто первый — того и добыча.<br/><br/>

            <h3 class="font-medium text-2xl">2. Старайтесь не ломать структуру данжей.</h3>
            Несмотря на включённый режим приключения, относитесь к окружению с уважением — дайте другим тоже насладиться атмосферой.<br/><br/>

            <h3 class="font-medium text-2xl">3. Лор важен, но не обязателен.</h3>
            Ивент основан на сюжете, но постоянное отыгрывание роли — по желанию. Хочешь — лорь, хочешь — просто проходи.<br/><br/>

            <h3 class="font-medium text-2xl">4. Не мешайте другим игрокам.</h3>
            Уважайте чужой прогресс. Не подглядывайте за прохождением, не крадите ключи и награды, не мешайте прохождению.<br/><br/>

            <h3 class="font-medium text-2xl">5. Если застряли — зовите ведущего.</h3>
            Если что-то багнулось или не сработало, не ломайте — обратитесь к организатору (@nikonell или @vitaliy908), он поможет.<br/><br/>
        </div>
    </div>
</div>

<div class="w-fit h-fit my-16 p-4 pl-10 flex flex-row gap-32 items-center bg-card-bg rounded-4xl">
    <span class="text-2xl font-medium">ratsmania_resources.zip</span>
    <a href="/ratsmania_resources.zip" download class="bg-primary rounded-3xl py-4 px-6 cursor-pointer flex flex-row gap-4">
        <Download height="32" />
        <span class="text-card-bg text-2xl font-semibold">Download</span>
    </a>
</div>
