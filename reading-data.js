// Dữ liệu Reading Part 4 (dạng multiple matching: đọc ý kiến nhiều người rồi ghép với câu hỏi "Who...?")
const readingData = [
  {
    topic: "The music festival",
    part: 4,
    people: [
      { name: "James", color: "#5B7FEB", text: "This is my first time going to a concert, and the experience was quite mixed. During the first two days, the music was rather ordinary, and the event would have been far more enjoyable if there had been just a little sunshine to brighten things up. Luckily, the last day completely changed my impression, as I finally got to see my favorite singers. Meeting them and enjoying the performances made the whole trip memorable and truly special." },
      { name: "Lisa", color: "#5FBE62", text: "I attend music festivals every year, and over time it has become something of a personal tradition. I really enjoy the energetic atmosphere where people come together to share music and excitement. This particular festival, however, felt quite different from what I am used to. The weather conditions were less than perfect, though it didn't bother me that much, as I have enjoyed festivals in the rain before. The venue was moderately convenient and the performances themselves were rather unremarkable. To be honest, I doubt I will choose to come back in the future." },
      { name: "Robert", color: "#D4A017", text: "I don't like one particular kind of music being played at festivals, as I much prefer a variety of genres to enjoy and dance to. Luckily, this event truly lived up to what I was hoping for. The songs and melodies were absolutely impressive, leaving a strong impression on me. Although there was some rain, I actually felt it made the atmosphere even more vibrant and fun. One drawback, however, is that the cost was quite high, which many students, including me, found difficult to afford. Organizers should reconsider the price more carefully." },
      { name: "Christina", color: "#8B5CF6", text: "My band and I went to the music festival, and we delivered the kind of performance our audience has come to expect from us. The show turned out to be truly memorable, not only because of the energy on stage but also because some of our ex-band members were present. It felt great to reconnect with them and share stories after the performance. The atmosphere overall was very positive, and the crowd seemed to enjoy every moment. The only real challenge was that the venue was located quite far from the main road, which made moving our instruments and equipment rather inconvenient." }
    ],
    questions: [
      { q: "Who was not impressed by the event overall?", a: "Lisa" },
      { q: "Who thought the event was expensive?", a: "Robert" },
      { q: "Who is disappointed with the weather?", a: "James" },
      { q: "Who likes meeting old friends?", a: "Christina" },
      { q: "Who enjoyed the final day of the music event?", a: "James" },
      { q: "Who thought the location was not good?", a: "Christina" },
      { q: "Who enjoyed all the music at the music event?", a: "Robert" }
    ]
  },
  {
    topic: "Extreme sports",
    part: 4,
    people: [
      { name: "Jose", color: "#5B7FEB", text: "I don't usually like sports, but once I tried sea diving at the invitation of my friends. I fell in love with this sport ever since my first attempt. Extreme sports can be very dangerous; therefore, before I decided to take it up as a hobby, I made sure that I fully understood all the guidance from my expert trainers, who have years of experience. This helped me improve myself and feel more confident." },
      { name: "Marisol", color: "#5FBE62", text: "Some people like jumping out of aeroplanes or exploring the sea. I'm a pilot, and I have never understood why people would throw themselves into such danger. I once tried an extreme sport and realised I was right from the beginning. My job is already overwhelming and involves enough risky activities. Now, I prefer something more casual, such as baseball or volleyball." },
      { name: "Sira", color: "#D4A017", text: "Doing free-diving requires a lot of patience and effort to become proficient. I live far away from the sea, so it is even more difficult for me. I can only do it a few times a year, which is never enough to satisfy my passion. Once I am in the water, I feel at home. I am surrounded by various types of fish and can almost touch them." },
      { name: "Bao", color: "#8B5CF6", text: "As a child, I used to play sports because they were part of our school curriculum. I mean, whose school isn't? However, I have never enjoyed those activities. Some students are naturally gifted, as they have strong physiques and are able to endure long running sessions; however, not everyone is the same. For me, these lessons were rather a waste of time, as I preferred staying indoors and reading books." }
    ],
    questions: [
      { q: "Who enjoys playing extreme sports after their first attempt?", a: "Jose" },
      { q: "Who enjoys the nature while doing sports?", a: "Sira" },
      { q: "Who avoids doing any sports?", a: "Bao" },
      { q: "Who thinks extreme sports are not necessary for them?", a: "Marisol" },
      { q: "Who thinks training is important before doing extreme sports?", a: "Jose" },
      { q: "Who wishes they were able to do extreme sports more often?", a: "Sira" },
      { q: "Who prefers traditional sports?", a: "Marisol" }
    ]
  },
  {
    topic: "Childhood activities",
    part: 4,
    people: [
      { name: "Sarah", color: "#5B7FEB", text: "As a child, I played board games with my friends. The rules were simple, easy and straightforward to grasp, which made the games enjoyable and accessible. As I grew older, I came to believe that board games could be a wonderful way for families to bond. However, modern games have become far more complex, with numerous rules and a wide range of characters to choose from. Although I truly enjoyed playing with my two boys and we often laughed together, I found that learning how to play required quite a bit of effort." },
      { name: "William", color: "#5FBE62", text: "I preferred to play outdoors with my friends (peers) when I was small. Fortunately, the weather where we lived was usually pleasant, so we often spent hours running around and chasing each other on the field. At times, we would lie down on the grass and make funny faces, enjoying the carefree moments of childhood. Those memories remain incredibly precious to me and shaped my desire to be surrounded by people. Even now, I find it difficult to stay at home alone for long." },
      { name: "Sophia", color: "#D4A017", text: "I wasn't able to move much as a child and even now. Instead, I was captivated by books (books are my companions) and often preferred reading in my free time. There was a library I frequently visited, where I could lose myself in different stories for hours. Nowadays, I don't read as much as I used to, but I also don't go out very often because I spend time on my computer. I especially enjoy interactive games, as they allow me to socialize and connect with people online." },
      { name: "Jack", color: "#8B5CF6", text: "I enjoy playing outdoors. On gloomy days, which happened quite often, I would stare sadly out of the window, wishing I could be outside. There wasn't much to do indoors back then - until one day my mother surprised me with a box full of art supplies. Inside were vibrant palettes, paintbrushes of different sizes, and stacks of clean paper. That was the moment I discovered another passion: painting. I could spend hours simply gazing at a blank canvas, imagining what picture I might bring to life next." }
    ],
    questions: [
      { q: "Who preferred reading books as a child?", a: "Sophia" },
      { q: "Who enjoyed doing arts as a child?", a: "Jack" },
      { q: "Who enjoyed playing with other children in the past?", a: "William" },
      { q: "Who thought traditional games were much simpler?", a: "Sarah" },
      { q: "Who enjoyed playing games with their children?", a: "Sarah" },
      { q: "Who wished they could spend more time outdoors?", a: "Jack" },
      { q: "Who enjoyed playing modern games?", a: "Sophia" }
    ]
  },
  {
    topic: "Volunteering",
    part: 4,
    people: [
      { name: "Boyd", color: "#5B7FEB", text: "I understand many young people like volunteering abroad, but honestly, I feel most people are more interested in traveling. I believe we should use our time more meaningfully. Each town has many people in need. Their situations are difficult, and they don't have the means to improve their quality of life. They are individuals who have contributed a lot to the country. Sharing stories with them helps us understand the differences between generations. We can also broaden our knowledge about local history, traditions, and culture through their experiences." },
      { name: "Chirish", color: "#5FBE62", text: "My mother was very involved with local charities because she is part of that organization, but I'm not into it. I prefer volunteering abroad because I can develop soft skills – something that will benefit my future career. Also, meeting new people helps me expand my network and create valuable connections I can use later in my professional life." },
      { name: "Noah", color: "#D4A017", text: "I'm busy with work these days and rarely have any free time to do anything, so spending even a few hours volunteering is difficult. I would have to take half a day off work. I see many people in need and they genuinely require some extra financial support. That's something I can help with because I earn a good salary. Making monthly donations is not a problem for me - it's how I show my support and contribution." },
      { name: "Chinua", color: "#8B5CF6", text: "I don't have many financial resources but I believe there are many ways we can show kindness through volunteering. I'm retired now, and I currently help build houses for people in need. I work with a volunteering organization that already has clear plans in place. Through this work, I've had the chance to experience different foreign cultures. We're often sent to various countries to carry out these projects, so it's also a great way to travel while doing something meaningful. The job involves manual labor, so we're able to improve our physical health - something that some people only begin to notice after a while." }
    ],
    questions: [
      { q: "Who thinks volunteering brings physical benefits?", a: "Chinua" },
      { q: "Who thinks volunteering is a good way to make friends?", a: "Chirish" },
      { q: "Who thinks volunteering is a good reason to travel?", a: "Chinua" },
      { q: "Who thinks volunteering should help local communities?", a: "Boyd" },
      { q: "Who thinks volunteering is good for learning about culture?", a: "Boyd" },
      { q: "Who thinks volunteering can help advance their career?", a: "Chirish" },
      { q: "Who thinks volunteering can be helped by giving money?", a: "Noah" }
    ]
  },
  {
    topic: "Choosing a Career",
    part: 4,
    people: [
      { name: "Olivia", color: "#5B7FEB", text: "When I finished school, I didn't really know what I wanted to do. Some people advised me to get a job right away. However, I preferred to gain some practical experience first. That's why I applied for many volunteering roles. Even though I didn't earn any money, I was able to try different kinds of work. Looking back, I'm happy with my decision because of the useful knowledge I gained." },
      { name: "Chirish", color: "#5FBE62", text: "I went straight to university after I graduated from high school. I had always wanted to become a teacher, so there was no need to look at other careers. Three months ago, I joined an internship at a local school. It was really an eye-opening experience, although the workload was heavier than I thought. Still, I believe it was very worthwhile." },
      { name: "Emma", color: "#D4A017", text: "As a child, I lived near a plumber and sometimes worked with her. She asked me to do easy jobs like checking for pipe leaks or fastening the nails with a screw. So later, it felt natural for me to study at university to become an electrician. Now that I see there are short online electrical courses, I wish I had chosen that instead." },
      { name: "Grace", color: "#8B5CF6", text: "After school, I wanted some time to figure out what I really wanted. So I started looking for temporary jobs. However, it was difficult to find one because most companies didn't accept people without experience. In the end, a game company contacted me and I agreed to work with them. The job was hybrid, so sometimes I worked in the evenings, but that was fine for me." }
    ],
    questions: [
      { q: "Who enjoyed working when training?", a: "Chirish" },
      { q: "Who thinks they benefited from working for free?", a: "Olivia" },
      { q: "Who thinks their training was too long?", a: "Emma" },
      { q: "Who enjoys working in a flexible work environment?", a: "Grace" },
      { q: "Who did not want to change to other careers?", a: "Chirish" },
      { q: "Who thinks it was hard to get their first job?", a: "Grace" },
      { q: "Who enjoyed doing things with their hands?", a: "Emma" }
    ]
  }
];

// Mẹo / hướng dẫn cách làm Reading Part 4
const readingForms = {
  4: {
    title: "PART 4 — Multiple matching (ghép ý kiến 4 người)",
    html: "<p>Dạng bài: đọc ý kiến/đoạn chia sẻ của <b>4 người khác nhau</b> về cùng 1 chủ đề, sau đó trả lời <b>7 câu hỏi dạng \"Who...?\"</b> bằng cách chọn đúng tên người phù hợp.</p>" +
      "<ol>" +
      "<li><b>Đọc lướt câu hỏi trước</b> để biết mình cần tìm thông tin gì (ý kiến, cảm xúc, lý do...).</li>" +
      "<li><b>Gạch chân từ khoá</b> trong câu hỏi (ví dụ: expensive, weather, training, career...).</li>" +
      "<li>Đọc từng đoạn của 4 người, tìm câu có ý nghĩa <b>tương đương</b> (không nhất thiết trùng từ) với từ khoá trong câu hỏi.</li>" +
      "<li>Chú ý các từ chuyển ý ngược nghĩa: <i>but, however, although, despite</i> — thường chứa đáp án vì thể hiện quan điểm thật của người nói.</li>" +
      "<li>Một người có thể là đáp án cho nhiều câu hỏi khác nhau — đừng nghĩ mỗi người chỉ ứng với 1 câu.</li>" +
      "<li>Làm xong, đọc lại để chắc chắn không chọn nhầm người có ý kiến gần giống nhau.</li>" +
      "</ol>" +
      "<p class='hint'>Mẹo: thời gian làm Part 4 khá eo hẹp, nên đọc 1 lượt lấy ý chính trước, rồi quay lại tìm chi tiết cho từng câu thay vì dịch từng câu một.</p>"
  }
};
