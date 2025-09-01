class CustomAlert {
    constructor() {
        this.createAlertHTML();
    }

    createAlertHTML() {
        const overlay = document.createElement('div');
        overlay.className = 'alert-overlay';
        overlay.id = 'customAlertOverlay';
        
        overlay.innerHTML = `
            <div class="alert-container" id="customAlertContainer">
                <div class="alert-header">
                    <h3 class="alert-title" id="customAlertTitle">Alert</h3>
                    <button class="alert-close" id="customAlertClose">&times;</button>
                </div>
                <div class="alert-content" id="customAlertContent">
                    Alert message goes here.
                </div>
                <div class="alert-buttons" id="customAlertButtons">
                    <button class="alert-btn" id="customAlertOk">OK</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        this.setupEventListeners();
    }

    setupEventListeners() {
        const overlay = document.getElementById('customAlertOverlay');
        const closeBtn = document.getElementById('customAlertClose');
        const okBtn = document.getElementById('customAlertOk');
        
        // Close on overlay click
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                this.hide();
            }
        });
        
        closeBtn.addEventListener('click', () => this.hide());
        
        okBtn.addEventListener('click', () => this.hide());
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && overlay.style.display === 'flex') {
                this.hide();
            }
        });
    }

    show(options = {}) {
        const {
            title = 'Alert',
            message = 'This is an alert message.',
            type = 'info',
            buttons = [{ text: 'OK', action: () => this.hide() }],
            showCloseButton = true
        } = options;

        document.getElementById('customAlertTitle').textContent = title;
        document.getElementById('customAlertContent').innerHTML = message;
        
        const container = document.getElementById('customAlertContainer');
        container.className = `alert-container ${type}`;
        
        const closeBtn = document.getElementById('customAlertClose');
        closeBtn.style.display = showCloseButton ? 'flex' : 'none';
        
        this.updateButtons(buttons);
        
        const overlay = document.getElementById('customAlertOverlay');
        overlay.style.display = 'flex';
        
        container.focus();
    }

    updateButtons(buttons) {
        const buttonsContainer = document.getElementById('customAlertButtons');
        buttonsContainer.innerHTML = '';
        
        buttons.forEach((button, index) => {
            const btn = document.createElement('button');
            btn.className = `alert-btn ${button.class || ''}`;
            btn.textContent = button.text;
            btn.addEventListener('click', () => {
                if (button.action) button.action();
                if (button.closeOnClick !== false) this.hide();
            });
            
            if (index === 0) {
                setTimeout(() => btn.focus(), 100);
            }
            
            buttonsContainer.appendChild(btn);
        });
    }

    hide() {
        const overlay = document.getElementById('customAlertOverlay');
        const container = document.getElementById('customAlertContainer');
        
        container.classList.add('closing');
        
        setTimeout(() => {
            overlay.style.display = 'none';
            container.classList.remove('closing');
        }, 300);
    }

    success(title, message, buttons) {
        this.show({ title, message, type: 'success', buttons });
    }

    warning(title, message, buttons) {
        this.show({ title, message, type: 'warning', buttons });
    }

    error(title, message, buttons) {
        this.show({ title, message, type: 'error', buttons });
    }

    info(title, message, buttons) {
        this.show({ title, message, type: 'info', buttons });
    }

    confirm(title, message, onConfirm, onCancel) {
        this.show({
            title,
            message,
            type: 'info',
            buttons: [
                {
                    text: 'Cancel',
                    action: onCancel || (() => {}),
                    class: ''
                },
                {
                    text: 'Confirm',
                    action: onConfirm || (() => {}),
                    class: 'primary'
                }
            ]
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.customAlert = new CustomAlert();
});

window.showAlert = (options) => window.customAlert.show(options);
window.showSuccess = (title, message) => window.customAlert.success(title, message);
window.showWarning = (title, message) => window.customAlert.warning(title, message);
window.showError = (title, message) => window.customAlert.error(title, message);
window.showInfo = (title, message) => window.customAlert.info(title, message);
window.showConfirm = (title, message, onConfirm, onCancel) => 
window.customAlert.confirm(title, message, onConfirm, onCancel);
