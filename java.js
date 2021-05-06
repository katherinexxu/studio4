// var quotes = [
//   '这可能是您一生中唯一的一个月，由于某些想法可能会困扰您几天，尽管您应该在知道之前先找到很多缓解的方法。但是，您不要忘记，这种不稳定的变化会使您容易受到警报的影响。制定与创业或结识新朋友有关的鼓舞人心的计划。也许您会考虑您的选择。尽管如此，不要为此过度瘫痪！',
//   '这可能是您生活中不寻常的一点，因为许多情况会暂时使您感到恐惧，尽管您应该在下半月得到一种热烈的支持。但是，您仍应牢记，发生这种混乱的动荡会使您容易承受压力。尽管如此，梅可能还会带来有关金钱或社交活动的有趣选择。也许您会对您的选择产生想法。尽管如此，请不要对它过度犹豫！',
//   '这可能是您一生中一个令人着迷的月份，因为许多事件会在几天内使您感到恐惧，尽管您有时会获得大量的满足感。虽然，您不应忘记您的情况的这种不稳定变化会引起不安。然而，这也意味着鼓舞人心的有关业务或浪漫的开端。也许您会考虑您的选择。尽管如此，不要对它太优柔寡断！',
//   '这可能是您生活中一个令人困惑的月份，因为许多巧合会困扰您一段时间，尽管您应该很快就对内容感到满意。但是，您应该记住，这种动荡的变化会使您容易紧张。但这仍然是与职业生涯或友谊有关的新机遇的好去处。也许您会考虑其他选择。虽然，但不要对此持怀疑态度！',
//   '这可能是您生命中至关重要的一个月，这是由于一些想法会困扰您几天，尽管您稍后会发现足够的舒适感。尽管如此，您应该认识到这种意外的变化会引起紧张。但是，这也允许与就业市场或恋爱相关的有前途的计划。也许您会考虑下一步的行动。不过，请不要对它过度不确定！',
//   '这可能是您一生中的不平凡之处，因为起初会有很多想法困扰您，尽管您应该尽快获得足够的支持。但是，您仍然应该认识到，这种体液变化可能会使您感到焦虑。尽管如此，这还意味着有关就业市场或网络的新计划。也许您会尝试决定自己的行动方案。话虽这么说，但不要为此而过度瘫痪！',
//   '这可能是您生命中的关键时期，因为许多事件会困扰您几天，尽管您应该尽快找到重要的支持。但是，您不应忘记，在您的情况下如此迅速的搅动会加剧混乱。尽管如此，这对于启发有关财务或网络的选择也是有利的。也许您会考虑您的选择。话虽这么说，不要对它变得过于不情愿！',
//   '这可能是您一生中不寻常的时期，因为某些事件会使您有些不适，尽管您应该尽快找到足够的安慰。但是，您应该承认，这种不稳定的变化会使您容易受到情绪波动的影响。虽然，对于与企业家精神或社交活动有关的有前途的努力，梅可能也是一个好点。您可能会考虑自己的选择。不过，不要太犹豫！',
//   '这可能是您生活中的一个特殊点，因为许多想法会在一段时间内使您感到不安，尽管以后您应该会感到宾至如归。但是，您仍然应该承认，事件的这种剧烈逆转会引起压力。但是，这对于与您的职业生活或社交活动有关的创新活动也很有利。也许您会尝试决定自己的未来。虽然，不要对此感到犹豫不决！',
//   '这可能是您生活中一个复杂的时期，因为某些情况会暂时使您困惑，尽管您应该在本月下半月得到一种幸福的满足感。但是，您应该记住，情况的如此迅速的变化可能会使您感到不安。但是，这也可能适合与金钱有关的新选择或结识新朋友。也许您会考虑自己的选择。不过，不要对它过度犹豫！'
// ]

// function newQuote(){
//     var randomNumber = Math.floor(Math.random() * (quotes.length));
//     document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
// }


const quotes = [
    {
        chinese: '这可能是您一生中唯一的一个月，由于某些想法可能会困扰您几天，尽管您应该在知道之前先找到很多缓解的方法。但是，您不要忘记，这种不稳定的变化会使您容易受到警报的影响。制定与创业或结识新朋友有关的鼓舞人心的计划。也许您会考虑您的选择。尽管如此，不要为此过度瘫痪',
        english: 'This can be a unique month in your life, as a result of some thoughts that will trouble you for some days, though you should find much relief before you know it. Nevertheless, you should not forget that such fluid changes can leave you vulnerable to alarm. Allow for inspiring plans related to entrepreneurship or meeting new people. Maybe you will think about your options. In spite of that, don/t be overly paralyzed about it!'
    },
    {
        chinese: '这可能是您生活中不寻常的一点，因为许多情况会暂时使您感到恐惧，尽管您应该在下半月得到一种热烈的支持。但是，您仍应牢记，发生这种混乱的动荡会使您容易承受压力。尽管如此，梅可能还会带来有关金钱或社交活动的有趣选择。也许您会对您的选择产生想法。尽管如此，请不要对它过度犹豫',
        english: 'This can be an unusual point in your life, as a result of a number of happenstances that will intimidate you temporarily, though you should anticipate a welcoming sense of support in the second half of the month. But still, you should keep in mind that such fluid commotions of occurrences can leave you susceptible to stress. Nonetheless, May also brings intriguing options regarding money or socializing. Maybe you will have thoughts about your options. In spite of that, don/t become unduly hesitant about it!'
    }, 
    {
        chinese: '这可能是您一生中一个令人着迷的月份，因为许多事件会在几天内使您感到恐惧，尽管您有时会获得大量的满足感。虽然，您不应忘记您的情况的这种不稳定变化会引起不安。然而，这也意味着鼓舞人心的有关业务或浪漫的开端。也许您会考虑您的选择。尽管如此，不要对它太优柔寡断！',
        english: 'This can be an intriguing month in your life, due to many incidents that will intimidate you for some days, though you should be getting significant content at some point. Although, you should not forget that such fluid changes of your situation can precipitate disquiet. And yet, this also means inspiring beginnings concerning business or romance. Maybe you will think about your options. In spite of that, don/t become overly indecisive about it!'
    },
    {
        chinese: '这可能是您生活中一个令人困惑的月份，因为许多巧合会困扰您一段时间，尽管您应该很快就对内容感到满意。但是，您应该记住，这种动荡的变化会使您容易紧张。但这仍然是与职业生涯或友谊有关的新机遇的好去处。也许您会考虑其他选择。虽然，但不要对此持怀疑态度！',
        english: 'This can be a confusing month in your life, because of a number of coincidences that will puzzle you for some time, though you should expect a welcoming sense of content soon enough. And yet, you should remember that such turbulent changes can leave you vulnerable to nervousness. But still, this also can be a good point for new opportunities having to do with your professional life or friendship. Perhaps you will consider your alternatives. Although, don/t be unreasonably skeptical about it!'
    },
    {
        chinese: '这可能是您生命中至关重要的一个月，这是由于一些想法会困扰您几天，尽管您稍后会发现足够的舒适感。尽管如此，您应该认识到这种意外的变化会引起紧张。但是，这也允许与就业市场或恋爱相关的有前途的计划。也许您会考虑下一步的行动。不过，请不要对它过度不确定！',
        english: 'This can be a crucial month in your life, as a result of several thoughts that will puzzle you for a few days, though you should find sufficient comfort at a later point. Nonetheless, you should recognize that such unexpected changes can create nervousness. However, this also allows for promising plans related to the job market or romance. Maybe you will deliberate on your next move. Still, don/t become excessively unsure about it!'
    },
    {
        chinese: '这可能是您一生中的不平凡之处，因为起初会有很多想法困扰您，尽管您应该尽快获得足够的支持。但是，您仍然应该认识到，这种体液变化可能会使您感到焦虑。尽管如此，这还意味着有关就业市场或网络的新计划。也许您会尝试决定自己的行动方案。话虽这么说，但不要为此而过度瘫痪！',
        english: 'This can be an unordinary point in your life, due to many thoughts that will unsettle you at first, though you should anticipate sufficient support soon enough. But still, you should recognize that such fluid changes can leave you open to anxiety. Still, this also means fresh plans concerning the job market or networking. Perhaps you will try to decide on your course of action. Having said that, don/t become excessively paralyzed about it!'
    },
    {
        chinese: '这可能是您生命中的关键时期，因为许多事件会困扰您几天，尽管您应该尽快找到重要的支持。但是，您不应忘记，在您的情况下如此迅速的搅动会加剧混乱。尽管如此，这对于启发有关财务或网络的选择也是有利的。也许您会考虑您的选择。话虽这么说，不要对它变得过于不情愿！',
        english: 'This can be a crucial period in your life, due to a number of events that will bother you for a few days, though you should find significant support soon enough. However, you should not forget that such rapid stirs in your circumstances can precipitate confusion. Nonetheless, this also is favorable for inspiring options regarding finances or networking. Perhaps you will think about your options. Having said that, don/t become overly reluctant about it!'
    },
    {
        chinese: '这可能是您一生中不寻常的时期，因为某些事件会使您有些不适，尽管您应该尽快找到足够的安慰。但是，您应该承认，这种不稳定的变化会使您容易受到情绪波动的影响。虽然，对于与企业家精神或社交活动有关的有前途的努力，梅可能也是一个好点。您可能会考虑自己的选择。不过，不要太犹豫！',
        english: 'This can be an unusual period in your life, as a result of some events that will upset you for a while, though you should find significant comfort soon enough. And yet, you should acknowledge that such unstable changes can leave you vulnerable to moodiness. Although, May also can be a good point for promising endeavors having to do with entrepreneurship or socializing. Possibly you will consider your choices. Nevertheless, don/t feel too hesitant about it!'
    },
    {
        chinese: '这可能是您生活中的一个特殊点，因为许多想法会在一段时间内使您感到不安，尽管以后您应该会感到宾至如归。但是，您仍然应该承认，事件的这种剧烈逆转会引起压力。但是，这对于与您的职业生活或社交活动有关的创新活动也很有利。也许您会尝试决定自己的未来。虽然，不要对此感到犹豫不决！',
        english: 'This can be a special point in your life, because of a number of thoughts that will unsettle you for some time, though you should be getting a welcoming sense of content later on. But still, you should acknowledge that such turbulent reversals of events can induce stress. However, May also is favorable for innovative endeavors having to do with your professional life or socializing. Maybe you will try to decide on your future. Although, don/t feel too indecisive about it!'
    },
    {
        chinese: '这可能是您生活中一个复杂的时期，因为某些情况会暂时使您困惑，尽管您应该在本月下半月得到一种幸福的满足感。但是，您应该记住，情况的如此迅速的变化可能会使您感到不安。但是，这也可能适合与金钱有关的新选择或结识新朋友。也许您会考虑自己的选择。不过，不要对它过度犹豫！',
        english: 'This can be a complicated time in your life, due to some happenings that will puzzle you temporarily, though you should be met by a welcoming sense of happiness in the second half of the month. Nonetheless, you should keep in mind that such swift changes of your situation can leave you open to uneasiness. However, this also could be suitable for fresh choices pertaining to money or meeting new people. Perhaps you will consider your choices. Still, don/t become unduly hesitant about it!'
},
];

function newQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteDisplay').textContent = quotes[randomNumber].chinese;
    // button.onclick = document.getElementById('quoteDisplay').textContent = quotes[randomNumber].english;


document.querySelector('#placement button').onclick = () => {
    document.getElementById('quoteDisplay').textContent = quotes[randomNumber].english;
}
}




