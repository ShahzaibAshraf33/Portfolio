import { motion, AnimatePresence } from 'framer-motion';
import { HiMail } from 'react-icons/hi';
import {
  FiPhone,
  FiMapPin,
  FiSend,
  FiUser,
  FiMail,
  FiChevronDown,
  FiCheckCircle,
  FiAlertCircle,
  FiLoader,
} from 'react-icons/fi';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { contactSchema} from '../api/contact';
import type {ContactFormData } from '../api/contact';
import { submitContactForm } from '../api/contactApi';

/* ── Contact details data ── */
const contactDetails = [
  {
    Icon: FiMapPin,
    label: 'Address',
    value: 'Lahore, Pakistan',
    href: '#',
  },
  {
    Icon: HiMail,
    label: 'My Email',
    value: 'shahzaibashraf99887@gmail.com',
    href: 'mailto:shahzaibashraf99887@gmail.com',
  },
  {
    Icon: FiPhone,
    label: 'Call Me Now',
    value: '+92 332-4136922',
    href: 'tel:+923324136922',
  },
];

/* ── Field error message ── */
const FieldError = ({ message }: { message?: string }) => (
  <AnimatePresence>
    {message && (
      <motion.p
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.2 }}
        className="contact-field-error"
      >
        <FiAlertCircle className="inline mr-1 mb-0.5" />
        {message}
      </motion.p>
    )}
  </AnimatePresence>
);

/* ── Input field ── */
interface InputFieldProps {
  id: string;
  name: keyof ContactFormData;
  type?: string;
  label: string;
  placeholder: string;
  icon?: React.ReactNode;
  error?: string;
  registration: ReturnType<typeof useForm<ContactFormData>>['register'];
}

const InputField = ({
  id,
  name,
  type = 'text',
  label,
  placeholder,
  icon,
  error,
  registration,
}: InputFieldProps) => (
  <div className="contact-field">
    <label htmlFor={id} className="contact-label">
      {label}
    </label>
    <div className="contact-input-wrap">
      {icon && <span className="contact-input-icon">{icon}</span>}
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...registration(name)}
        className={`contact-input${icon ? ' contact-input--icon' : ''}${
          error ? ' contact-input--error' : ''
        }`}
      />
    </div>
    <FieldError message={error} />
  </div>
);

/* ── Textarea field ── */
interface TextareaFieldProps {
  id: string;
  name: keyof ContactFormData;
  label: string;
  placeholder: string;
  rows?: number;
  error?: string;
  registration: ReturnType<typeof useForm<ContactFormData>>['register'];
}

const TextareaField = ({
  id,
  name,
  label,
  placeholder,
  rows = 4,
  error,
  registration,
}: TextareaFieldProps) => (
  <div className="contact-field">
    <label htmlFor={id} className="contact-label">
      {label}
    </label>
    <textarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      {...registration(name)}
      className={`contact-input contact-textarea${
        error ? ' contact-input--error' : ''
      }`}
    />
    <FieldError message={error} />
  </div>
);

/* ── Toast notification ── */
interface ToastProps {
  type: 'success' | 'error';
  message: string;
}

const Toast = ({ type, message }: ToastProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 20, scale: 0.95 }}
    transition={{ duration: 0.3 }}
    className={`contact-toast contact-toast--${type}`}
  >
    {type === 'success' ? (
      <FiCheckCircle className="contact-toast-icon" />
    ) : (
      <FiAlertCircle className="contact-toast-icon" />
    )}
    <p>{message}</p>
  </motion.div>
);

/* ── Main section ── */
const ContactSection = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      location: '',
      message: '',
      projectDetails: '',
      budget: '',
    },
  });

  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      reset();
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="section-inner relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-accent text-sm tracking-[3px] mb-3 font-medium">
            GET IN TOUCH
          </p>
          <h2
            className="font-bold text-text-primary"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
          >
            Contact Me
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-10"
          >
            <p className="text-text-secondary leading-[1.9] text-base">
              I'm always open to discussing product design work or partnership
              opportunities. Whether you have a project in mind or just want to
              chat — feel free to reach out!
            </p>

            <div className="flex flex-col gap-6">
              {contactDetails.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-5 group"
                  data-cursor-hover
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:border-accent transition-all duration-300">
                    <Icon className="text-accent text-xl" />
                  </div>
                  <div>
                    <p className="text-text-muted text-[11px] font-semibold tracking-[2px] uppercase mb-0.5">
                      {label}
                    </p>
                    <p className="text-text-primary font-medium group-hover:text-accent transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            {/* Toast notifications */}
            <AnimatePresence mode="wait">
              {mutation.isSuccess && (
                <Toast
                  type="success"
                  message="Message sent successfully! I'll get back to you soon."
                />
              )}
              {mutation.isError && (
                <Toast
                  type="error"
                  message={
                    mutation.error instanceof Error
                      ? mutation.error.message
                      : 'Failed to send message. Please try again.'
                  }
                />
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit(onSubmit)} className="contact-form" noValidate>

              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  id="name"
                  name="name"
                  label="Full Name"
                  placeholder="John Doe"
                  icon={<FiUser />}
                  error={errors.name?.message}
                  registration={register}
                />
                <InputField
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  placeholder="john@example.com"
                  icon={<FiMail />}
                  error={errors.email?.message}
                  registration={register}
                />
              </div>

              {/* Location */}
              <InputField
                id="location"
                name="location"
                label="Location"
                placeholder="City, Country"
                icon={<FiMapPin />}
                error={errors.location?.message}
                registration={register}
              />

              {/* Message */}
              <TextareaField
                id="message"
                name="message"
                label="Message"
                placeholder="Tell me about your project or idea..."
                rows={3}
                error={errors.message?.message}
                registration={register}
              />

              {/* Project Details */}
              <TextareaField
                id="projectDetails"
                name="projectDetails"
                label="Project Details"
                placeholder="Describe your project scope, timeline, and requirements..."
                rows={3}
                error={errors.projectDetails?.message}
                registration={register}
              />

              {/* Budget — using Controller for select */}
              <div className="contact-field">
                <label htmlFor="budget" className="contact-label">
                  Budget Range
                </label>
                <div className="contact-input-wrap">
                  <Controller
                    name="budget"
                    control={control}
                    render={({ field }) => (
                      <select
                        {...field}
                        id="budget"
                        className={`contact-input contact-select${
                          errors.budget ? ' contact-input--error' : ''
                        }`}
                      >
                        <option value="" disabled>
                          Select a budget range
                        </option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 – $1,000</option>
                        <option value="1000-3000">$1,000 – $3,000</option>
                        <option value="3000-5000">$3,000 – $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    )}
                  />
                  <FiChevronDown className="contact-select-arrow" />
                </div>
                <FieldError message={errors.budget?.message} />
              </div>

              {/* Submit */}
              <div className="flex justify-center pt-2">
                <motion.button
                  type="submit"
                  disabled={mutation.isPending}
                  whileHover={
                    !mutation.isPending
                      ? {
                          scale: 1.04,
                          boxShadow: '0 0 28px rgba(184,245,106,0.45)',
                        }
                      : {}
                  }
                  whileTap={!mutation.isPending ? { scale: 0.97 } : {}}
                  className="btn-primary px-10 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? (
                    <>
                      <FiLoader className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </motion.button>
              </div>

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;