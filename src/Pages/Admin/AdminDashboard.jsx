import React, { useState, useEffect } from 'react';
import api from '../../api';
import './AdminDashboard.css';
import {
  FaPlus,
  FaSignOutAlt,
  FaLock,
  FaEdit,
  FaChevronRight,
  FaUserTie,
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarPlus,
  FaCalendarCheck,
  FaVideo,
  FaClipboardList,
  FaInfoCircle,
} from 'react-icons/fa';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(true);
  const [loginData, setLoginData] = useState({ identifier: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(true); // New state to handle initial auth check
  const [courses, setCourses] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [courseForm, setCourseForm] = useState({
    course_id: '',
    title: '',
    description: '',
    price: '',
    duration: '',
    instructor: 'Hemant Gandhi',
    category: 'Selenium',
    registration_url: '',
    zoom_link: '',
    start_date: '',
    end_date: '',
    is_published: true,
  });

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await api.get('/user/verify');
        setIsAuthenticated(true);
        setShowLoginModal(false);
        fetchCourses();
      } catch (error) {
        setIsAuthenticated(false);
        setShowLoginModal(true);
      } finally {
        setIsVerifying(false);
      }
    };
    checkAuth();
  }, []);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await api.get('/courses');
      setCourses(response.data);
    } catch (error) {
      toast.error('Failed to fetch courses');
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/user/login', loginData);
      setIsAuthenticated(true);
      setShowLoginModal(false);
      fetchCourses();
      toast.success('Login successful');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await api.post('/user/logout');
      setCourses([]); // clear admin data
      setIsAuthenticated(false);
      setShowLoginModal(true);
      toast.success('Logged out successfully');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (editingCourse) {
        await api.put(`/courses/update/${editingCourse.course_id}`, courseForm);
        toast.success('Course updated successfully');
      } else {
        await api.post('/courses/add', courseForm);
        toast.success('Course added successfully');
      }
      closeForm();
      fetchCourses();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to save course');
    } finally {
      setLoading(false);
    }
  };

  const openEditForm = (course) => {
    setEditingCourse(course);
    setCourseForm({
      course_id: course.course_id,
      title: course.title,
      description: course.description,
      price: course.price,
      duration: course.duration,
      instructor: course.instructor || 'Hemant Gandhi',
      category: course.category,
      registration_url: course.registration_url || '',
      zoom_link: course.zoom_link || '',
      start_date: course.start_date || '',
      end_date: course.end_date || '',
      is_published: course.is_published ?? true,
    });
    setShowAddForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeForm = () => {
    setShowAddForm(false);
    setEditingCourse(null);
    setCourseForm({
      course_id: '',
      title: '',
      description: '',
      price: '',
      duration: '',
      instructor: 'Hemant Gandhi',
      category: 'Selenium',
      registration_url: '',
      zoom_link: '',
      start_date: '',
      end_date: '',
      is_published: true,
    });
  };

  if (isVerifying) {
    return (
      <div className="admin-login-overlay">
        <div
          className="shimmer-loader"
          style={{ color: 'white', fontSize: '1.2rem' }}
        >
          Verifying security clearance...
        </div>
      </div>
    );
  }

  if (showLoginModal) {
    return (
      <div className="admin-login-overlay">
        <div className="admin-login-modal">
          <div className="modal-header">
            <FaLock className="lock-icon" />
            <h2>Admin Verification</h2>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username / Email</label>
              <input
                type="text"
                value={loginData.identifier}
                onChange={(e) =>
                  setLoginData({ ...loginData, identifier: e.target.value })
                }
                required
                placeholder="Enter admin ID"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? 'Verifying...' : 'Verify Access'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard-container">
      <header className="admin-header">
        <div className="brand-title">
          <span className="pill">Admin</span>
          <h1>Control Center</h1>
        </div>
        <div className="header-actions">
          <button
            className={`add-btn ${showAddForm ? 'active' : ''}`}
            onClick={() => (showAddForm ? closeForm() : setShowAddForm(true))}
          >
            <FaPlus /> {showAddForm ? 'Cancel Operation' : 'Create New Course'}
          </button>
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
      </header>

      {showAddForm && (
        <div className="add-course-form-container glass-morphism">
          <form className="add-course-form" onSubmit={handleFormSubmit}>
            <div className="form-title">
              <h2>
                {editingCourse ? 'Update Course Details' : 'Add New Course'}
              </h2>
              <p>All fields are required for a complete new Course.</p>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Course ID(Code)</label>
                <input
                  type="text"
                  value={courseForm.course_id}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, course_id: e.target.value })
                  }
                  required
                  placeholder="e.g. SEL-2025"
                  disabled={!!editingCourse}
                />
              </div>
              <div className="form-group">
                <label>Course Title</label>
                <input
                  type="text"
                  value={courseForm.title}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, title: e.target.value })
                  }
                  required
                  placeholder="Full name of the course"
                />
              </div>
              <div className="form-group full-width">
                <label>Course Description (Summary)</label>
                <textarea
                  value={courseForm.description}
                  onChange={(e) =>
                    setCourseForm({
                      ...courseForm,
                      description: e.target.value,
                    })
                  }
                  required
                  placeholder="Detailed curriculum overview..."
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Course (Price)</label>
                <input
                  type="number"
                  value={courseForm.price}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, price: e.target.value })
                  }
                  required
                  placeholder="Amount in primary currency"
                />
              </div>
              <div className="form-group">
                <label>Course Duration</label>
                <input
                  type="text"
                  value={courseForm.duration}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, duration: e.target.value })
                  }
                  required
                  placeholder="e.g. 10 Weeks"
                />
              </div>
              <div className="form-group">
                <label>Course Instructor</label>
                <input
                  type="text"
                  value={courseForm.instructor}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, instructor: e.target.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label>Course (Category)</label>
                <select
                  value={courseForm.category}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, category: e.target.value })
                  }
                >
                  <option value="Selenium">Selenium Automation</option>
                  <option value="Playwright">Playwright TS</option>
                  <option value="AI Testing">AI & ML Testing</option>
                  <option value="DevOps">DevOps for QA</option>
                </select>
              </div>
              <div className="form-group">
                <label>Registration Link</label>
                <input
                  type="url"
                  value={courseForm.registration_url}
                  onChange={(e) =>
                    setCourseForm({
                      ...courseForm,
                      registration_url: e.target.value,
                    })
                  }
                  placeholder="https://..."
                />
              </div>
              <div className="form-group">
                <label>Course Link (Zoom/GMeet)</label>
                <input
                  type="url"
                  value={courseForm.zoom_link}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, zoom_link: e.target.value })
                  }
                  placeholder="Meeting URL"
                />
              </div>
              <div className="form-group">
                <label>Course Start Date</label>
                <input
                  type="text"
                  value={courseForm.start_date}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, start_date: e.target.value })
                  }
                  placeholder="e.g. 1st March 2026"
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <div className="toggle-switch">
                  <label className="switch">
                    <input
                      type="checkbox"
                      checked={courseForm.is_published}
                      onChange={(e) =>
                        setCourseForm({
                          ...courseForm,
                          is_published: e.target.checked,
                        })
                      }
                    />
                    <span className="slider round"></span>
                  </label>
                  <span className="toggle-label">
                    {courseForm.is_published ? 'Published' : 'Hidden'}
                  </span>
                </div>
              </div>
            </div>
            <div className="form-footer">
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading
                  ? 'Processing...'
                  : editingCourse
                    ? 'Save Changes'
                    : 'Add New Course'}
              </button>
            </div>
          </form>
        </div>
      )}

      <section className="courses-list-section">
        <div className="section-header-compact">
          <h2>Active Courses</h2>
          <span className="count-badge">
            {courses.length} Courses Registered
          </span>
        </div>

        {loading && !courses.length ? (
          <div className="shimmer-loader">Loading catalog...</div>
        ) : (
          <div className="admin-courses-grid">
            {courses.map((course) => (
              <div key={course._id} className="modern-course-card">
                <div className="card-top">
                  <div className="card-badges">
                    <span
                      className={`status-pill ${course.is_published ? 'active' : 'inactive'}`}
                    >
                      {course.is_published ? 'Live' : 'Draft'}
                    </span>
                    <span className="category-tag">{course.category}</span>
                  </div>
                  <button
                    className="edit-action"
                    onClick={() => openEditForm(course)}
                  >
                    <FaEdit /> Edit
                  </button>
                </div>

                <div className="card-main">
                  <h3 className="course-title-card">{course.title}</h3>
                  <p className="course-id-tag">REF: {course.course_id}</p>

                  <div className="card-meta-v3">
                    <div className="meta-item-classic">
                      <FaUserTie className="meta-icon-v3" />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="meta-item-classic">
                      <span className="category-pill-v2">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  <div className="card-actions-row">
                    <div className="icon-tooltip-wrapper tooltip-left">
                      <FaInfoCircle className="action-icon-v2 desc-icon" />
                      <div className="modern-tooltip">
                        <strong>Description</strong>
                        <span>{course.description}</span>
                      </div>
                    </div>
                    <div className="icon-tooltip-wrapper tooltip-left">
                      <FaCalendarPlus className="action-icon-v2 start-date" />
                      <div className="modern-tooltip">
                        <strong>Commencement</strong>
                        <span>{course.start_date || 'TBD'}</span>
                      </div>
                    </div>
                    <div className="icon-tooltip-wrapper tooltip-left">
                      <FaCalendarCheck className="action-icon-v2 end-date" />
                      <div className="modern-tooltip">
                        <strong>Completion</strong>
                        <span>{course.end_date || 'TBD'}</span>
                      </div>
                    </div>
                    {course.zoom_link && (
                      <a
                        href={course.zoom_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-tooltip-wrapper"
                      >
                        <FaVideo className="action-icon-v2 zoom-link" />
                        <div className="modern-tooltip">
                          <strong>Live Session</strong>
                          <span className="tooltip-url">
                            {course.zoom_link}
                          </span>
                        </div>
                      </a>
                    )}
                    {course.registration_url && (
                      <a
                        href={course.registration_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="icon-tooltip-wrapper tooltip-right"
                      >
                        <FaClipboardList className="action-icon-v2 reg-link" />
                        <div className="modern-tooltip">
                          <strong>Registration</strong>
                          <span className="tooltip-url">
                            {course.registration_url}
                          </span>
                        </div>
                      </a>
                    )}
                  </div>
                </div>

                <div className="card-bottom">
                  <div className="price-display">
                    <small>Fee Structure</small>
                    <p>
                      {course.price} <span className="currency">INR</span>
                    </p>
                  </div>
                  <div className="card-utility">
                    {course.zoom_link ? (
                      <span
                        className="util-link has-link"
                        title="Zoom link available"
                      >
                        <FaCheckCircle /> Zoom
                      </span>
                    ) : (
                      <span className="util-link no-link">
                        <FaTimesCircle /> Zoom
                      </span>
                    )}
                    <FaChevronRight
                      className="arrow-icon"
                      onClick={() => openEditForm(course)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default AdminDashboard;
