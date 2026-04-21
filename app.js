const pages = {
    home: `
        <h2 class="text-2xl font-bold">Salom!</h2>
        <div class="glass-card mt-4">
            <p class="text-slate-400 text-xs uppercase">Kunlik Reja</p>
            <p class="italic text-sm mt-2">Hali reja tuzilmagan. O'rganishni boshlang!</p>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4">
            <div class="glass-card">
                <span class="text-xs text-slate-400">Streak</span>
                <p class="text-xl font-bold text-amber-500">0 kun</p>
            </div>
            <div class="glass-card">
                <span class="text-xs text-slate-400">Mastered</span>
                <p class="text-xl font-bold text-amber-500">0 words</p>
            </div>
        </div>
    `,
    skills: `
        <h2 class="text-xl font-bold mb-4">IELTS Skills</h2>
        <div class="space-y-3">
            ${['Listening', 'Reading', 'Writing', 'Speaking'].map(s => `
                <div class="glass-card flex justify-between items-center">
                    <span>${s}</span>
                    <span class="text-xs bg-slate-700 px-2 py-1 rounded">Soon</span>
                </div>
            `).join('')}
        </div>
    `,
    vocabulary: `
        <div class="text-center py-20">
            <div class="text-6xl mb-4">📓</div>
            <h2 class="text-xl font-bold">Lug'at bo'sh</h2>
            <p class="text-slate-400 text-sm mt-2">Hozircha hech qanday so'z qo'shilmagan.</p>
            <button class="mt-6 bg-amber-500 text-slate-900 px-6 py-2 rounded-lg font-bold">Add Word</button>
        </div>
    `,
    tests: `
        <h2 class="text-xl font-bold mb-4 italic">Testlar</h2>
        <div class="glass-card border-dashed border-slate-700 py-10 text-center">
            <p class="text-slate-500 italic">Testlar banki bo'sh.</p>
        </div>
    `,
    progress: `
        <h2 class="text-xl font-bold mb-4 text-center">Analytics</h2>
        <div class="glass-card h-48 flex items-center justify-center italic text-slate-500">
            Ma'lumotlar yetarli emas
        </div>
    `
};

function navigate(page) {
    const main = document.getElementById('app-content');
    main.innerHTML = pages[page] || pages['home'];
}

function openFeedback() {
    const modal = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    modal.classList.remove('hidden');
    content.innerHTML = `
        <h3 class="text-lg font-bold mb-4">Feedback</h3>
        <textarea class="w-full bg-slate-700 p-3 rounded-lg h-32 text-white" placeholder="Xatoni yoki taklifni yozing..."></textarea>
        <button onclick="closeModal()" class="w-full bg-amber-500 text-slate-900 p-3 rounded-lg mt-4 font-bold text-sm">Yuborish</button>
    `;
}

function closeModal() {
    document.getElementById('modal-container').classList.add('hidden');
}

// Start app
navigate('home');
